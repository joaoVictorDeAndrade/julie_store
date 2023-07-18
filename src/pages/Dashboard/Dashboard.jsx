import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ClientsStatsGraphs from "../../components/ClientsStatsGraphs/ClientsStatsGraphs";

const data = [
  {
    "street": "Rua da Ciencia",
    "cpf": "767.521.965-16",
    "birthdate": "1940-07-03",
    "neighborhood": "Barão Geraldo",
    "searchPatternName": [
      "albert",
      "einstin"
    ],
    "number": "34",
    "complement": "",
    "phone": "",
    "city": "Campinas",
    "cellphone": "(61) 98462-3594",
    "name": "Albert Einstin",
    "id": "njlj5XDahY01WV1szCnQ"
  },
  {
    "phone": "",
    "searchPatternName": [
      "bruce",
      "banner"
    ],
    "birthdate": "1987-01-01",
    "street": "Avenida Pedro Freitas",
    "cellphone": "(86) 98596-9720",
    "city": "Teresina",
    "name": "Bruce Banner",
    "neighborhood": "São Pedro",
    "cpf": "783.309.011-57",
    "complement": "Apto 02",
    "number": "25",
    "id": "fOp0BkKvxUkZw3sR01zk"
  },
  {
    "city": "Altinópolis",
    "birthdate": "1975-12-12",
    "street": "Antonio Bueno de Oliveira",
    "name": "Jairo Celestino de Andrade",
    "cellphone": "(11) 99996-8454",
    "phone": "",
    "cpf": "16991970832",
    "searchPatternName": [
      "jairo",
      "celestino",
      "de",
      "andrade"
    ],
    "complement": "",
    "neighborhood": "Parque do Café",
    "number": "1060",
    "id": "gTRkFRIVsqYGq53twVYT"
  },
  {
    "city": "Campinas",
    "searchPatternName": [
      "joao",
      "victor",
      "pereira",
      "de",
      "andrade"
    ],
    "birthdate": "2002-01-08",
    "name": "João Victor Pereira de Andrade",
    "phone": "",
    "cellphone": "(16) 9930-33532",
    "neighborhood": "Barão Geraldo",
    "complement": "",
    "number": "97",
    "cpf": "228.675.198.61",
    "street": "Jean Nassif Mokarzel",
    "id": "VbE8EYzuOM7MK1DiR47k"
  },
  {
    "neighborhood": "Parque do Café",
    "phone": "",
    "name": "Julielinda Pereira Barbosa",
    "street": "Antonio Bueno de Oliveira",
    "cellphone": "(16) 9927-44517",
    "cpf": "117.953.758.09",
    "number": "1060",
    "birthdate": "1968-05-18",
    "searchPatternName": [
      "julielinda",
      "pereira",
      "barbosa"
    ],
    "city": "Altinópolis",
    "complement": "",
    "id": "69ilwsgcM0sQQhsxjW6g"
  },
  {
    "cellphone": "11998921846",
    "street": "Fernandez Porto Alegre",
    "complement": "T4-51",
    "name": "Maria da Conceição Fortunato Pereira",
    "city": "São Paulo",
    "phone": "(16) 3665-3285",
    "neighborhood": "Fazenda Aricanduva",
    "number": "98",
    "cpf": "27023629823",
    "birthdate": "1977-08-13",
    "searchPatternName": [
      "maria",
      "da",
      "conceicao",
      "fortunato",
      "pereira"
    ],
    "id": "hhe5TaxK5tiggw0gNxMY"
  },
  {
    "name": "Otávio Bruno Marcos Vinicius Novaes",
    "birthdate": "1998-02-10",
    "city": "São Paulo",
    "neighborhood": "Bairro das Hortas",
    "cpf": "",
    "complement": "",
    "cellphone": "(22) 1123-23233",
    "searchPatternName": [
      "otavio",
      "bruno",
      "marcos",
      "vinicius",
      "novaes"
    ],
    "phone": "",
    "number": "12",
    "street": "Rua das Hortas2",
    "id": "OzXoe8hFYQxoQwZhZ95i"
  }
]
export default function Dashboard() {
  return (
    <Container>
      <>
        <Title text="Dashboard" />
        <ClientsStatsGraphs />
      </>
    </Container>
  );
}
