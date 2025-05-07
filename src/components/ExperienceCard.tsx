import {IExperience} from "@/types";
import styled from "styled-components";

type Props = {
  data: IExperience
}

const Wrapper = styled.div`
    &:hover {
        background: rgba(38, 45, 103, 0.11);
    }
`

export default function ExperienceCard({ data }: Props) {
  return (
    <Wrapper className="p-8 rounded-md cursor-pointer grid grid-cols-6 gap-1" >
      <div className="opacity-60 text-sm col-span-2">
        {data.period}
      </div>

      <div className="col-span-4">
        <div className="text-teal-600 font-bold mb-4">
          <span>{data.role}</span> | <span>{data.company}</span>
        </div>
        <p className="leading-7 opacity-80">
          {data.description}
        </p>

        <div className="flex gap-2 flex-wrap pt-6">
          {data.skills.map((skill, i) => {
            return (
              <div className="bg-teal-400/10 text-teal-300 leading-5 font-medium text-xs rounded-full px-3 py-1" key={i} >
                {skill}
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}