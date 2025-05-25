import { CompanionCard } from "@/components/CompanionCard";
import { CompanionsList } from "@/components/CompanionsList";
//@ts-ignore
import { Cta } from "@/components/Cta";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Pupular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainer explore"
          topic="neea asd a sd"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard
          id="123"
          name="Neura the brainer explore"
          topic="neea asd a sd"
          subject="science"
          duration={45}
          color="#e5d0ff"
        />
        <CompanionCard
          id="123"
          name="Neura the brainer explore"
          topic="neea asd a sd"
          subject="science"
          duration={45}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sections"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
