import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import { ClientForm, PersonalData, AddressData } from "./Clients.styles";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClientByID, postClient, putClient, getClientByCPF } from "../../services/clients";
import { isMobile, patternNameOnFirebase } from '../../helpers';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import useForm from "../../Hooks/UseForm";

let nameInputStyle = {}
const sexArray = [
  { value: 'MASCULINO', label: 'Masculino' },
  { value: 'FEMININO', label: 'Feminino' },
  { value: 'OUTRO', label: 'Outro' }
]

if (!isMobile()) nameInputStyle = { gridColumn: '1 / 3' }

export default function ClientDetails() {
  const params = useParams();
  const clientId = params.id;
  const navigate = useNavigate()

  const name = useForm("name");
  const cpf = useForm("cpf", false);
  const birthdate = useForm('birthdate');
  const phone = useForm('phone', false);
  const cellphone = useForm('cellphone', !phone.value);
  const street = useForm("street");
  const number = useForm("number");
  const complement = useForm(null, false);
  const neighborhood = useForm("neighborhood");
  const city = useForm("city");
  const [loading, setLoading] = useState(false);
  const [sex, setSex] = useState('MASCULINO')

  const resetForm = () => {
    name.setValue('');
    cpf.setValue('');
    birthdate.setValue('');
    phone.setValue('');
    cellphone.setValue('');
    street.setValue('');
    number.setValue('');
    complement.setValue('');
    neighborhood.setValue('');
    city.setValue('');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await getClientByID(clientId);
        name.setValue(response.name);
        cpf.setValue(response.cpf);
        birthdate.setValue(response.birthdate);
        phone.setValue(response.phone);
        cellphone.setValue(response.cellphone);
        street.setValue(response.street);
        number.setValue(response.number);
        complement.setValue(response.complement);
        neighborhood.setValue(response.neighborhood);
        city.setValue(response.city);
        setSex(response.sex)
      }
      catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false);
      }
    }

    if (clientId) fetchData();
    else resetForm()
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const fields = [name, cpf, birthdate, phone, cellphone, street, number, complement, neighborhood, city];
      const truthArray = fields.map(field => field.validate());

      if (truthArray.some((isValid) => isValid === false)) {
        return;
      }

      const response = await getClientByCPF(cpf.value);
      if (response.cpf && !clientId) {
        toast.error('Esse CPF já está cadastrado!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          theme: 'colored'
        });
        return;
      }

      const newClient = {
        name: name.value,
        cpf: cpf.value,
        birthdate: birthdate.value,
        phone: phone.value,
        cellphone: cellphone.value,
        street: street.value,
        number: number.value,
        complement: complement.value,
        neighborhood: neighborhood.value,
        city: city.value,
        searchPatternName: patternNameOnFirebase(name.value),
        sex
      }

      if (clientId) {
        await putClient(clientId, newClient)
      } else {
        const docId = await postClient(newClient)
        navigate(`/clientes/detalhes/${docId}`)
      }

      toast.success('Cliente salvo com sucesso!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: 'colored'
      });


    } catch (error) {
      console.log(error);
      toast.error('Algo deu errado!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        theme: 'colored'
      });
    }
  };

  const personalData = [
    { ...name, label: 'Nome', placeholder: 'Nome', style: { ...nameInputStyle } },
    { ...cpf, formatType: 'cpf', label: 'CPF', placeholder: 'CPF' },
    { ...birthdate, type: 'date', label: 'Data de Nascimento', placeholder: 'Data de Nascimento' },
    { ...phone, formatType: 'phone', label: 'Telefone', placeholder: '(16) 3665-1234' },
    { ...cellphone, formatType: 'phone', label: 'Celular', placeholder: '(16) 99999-9999' },
  ]

  const addressData = [
    { ...street, label: 'Rua', placeholder: 'Rua' },
    { ...number, label: 'Número', placeholder: 'Número' },
    { ...complement, label: 'Complemento', placeholder: 'Complemento' },
    { ...neighborhood, label: 'Bairro', placeholder: 'Bairro' },
    { ...city, label: 'Cidade', placeholder: 'Cidade' },
  ]

  return (
    <Container>
      <>
        <ToastContainer />

        <Title text={clientId ? "Editar Cliente" : "Adicionar Cliente"} />
        <ClientForm>
          <Title fontSize="1.25rem" text={"Dados Pessoais"} />
          <PersonalData>
            {personalData.map((input, key) => (<Input key={key} {...input} />))}

            <Select
              options={sexArray}
              value={sex}
              onChange={({ target }) => setSex(target.value)}
              label="Sexo"
            />

          </PersonalData>

          <Title fontSize="1.25rem" text={"Endereço"} />
          <AddressData>
            {addressData.map((input, key) => (<Input key={key} {...input} />))}
          </AddressData>

          <Button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            text={clientId ? "Editar Cliente" : "Criar Cliente"}
          />
        </ClientForm>
      </>
    </Container>
  );
}
