import Container from "../../components/Container/Container";
import Title from "../../components/Title/Title";
import ClientsStatsGraphs from "../../components/ClientsStatsGraphs/ClientsStatsGraphs";

import { useEffect, useState } from "react";
import { getClients } from "../../services/clients";

const emptyGenders = { MASCULINO: 0, FEMININO: 0, OUTRO: 0 }

export default function Dashboard() {
  const [genders, setGenders] = useState({ ...emptyGenders });

  useEffect(() => {
    const fetchClients = async () => {
      const clients = await getClients();
      const genderCounter = genders;

      clients.forEach(({ sex }) => {
        if (genders.hasOwnProperty(sex))
          genderCounter[sex]++;
      })

      setGenders({ ...genderCounter })
    };

    fetchClients();
  }, []);

  return (
    <Container>
      <>
        <Title text="Dashboard" />
        <ClientsStatsGraphs genders={genders} />
      </>
    </Container>
  );
}
