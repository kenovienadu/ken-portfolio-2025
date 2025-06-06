import {experience} from "@/data/experiences";
import {IExperience} from "@/types";
import ExperienceCard from "@/components/ExperienceCard";
import type { InferGetStaticPropsType } from 'next'
import MobileOnly from "@/components/MobileOnly";

export function getStaticProps() {
  const experiences: IExperience[] = [
    ...experience.full_time_experience,
    ...experience.consulting_experience
  ];

  return {
    props: {
      experiences,
    }
  }
}

export default function ExperiencePage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const experienceCards = props.experiences.map((experience) => (
    <ExperienceCard data={experience} key={experience.company} />
  ));

  return (
    <section>
      <MobileOnly>
        <div className="mb-8 text-2xl font-bold">Experiences</div>
      </MobileOnly>

      {experienceCards}
    </section>
  )
}