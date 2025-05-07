import useIsMobile from "@/hooks/useIsMobile";
import MobileOnly from "@/components/MobileOnly";
import styled from "styled-components";

const youtubeLectures = [
  {
    title: 'Building a Javascript Development Environment',
    link: 'https://www.youtube.com/embed/swikeXyXkhQ?si=6-DI_0fSmEYk_pXh'
  }
]

const LectureWrapper = styled.div`
    background: rgba(38, 45, 103, 0.21);
    
    iframe {
        border-radius: 3px;
        width: 100%;
    }
`

export default function LecturesPage() {
  const isMobile = useIsMobile();
  const lectures = youtubeLectures.map((lecture, index) => {
    return (
      <LectureWrapper className="p-6 rounded-md" key={index}>
        <div className="mb-4">{lecture.title}</div>
        <iframe
           height={isMobile ? 200 : 450} src={lecture.link}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </LectureWrapper>
    )
  })

  return (
    <section>
      <MobileOnly>
        <div className="mb-8 text-2xl font-bold">Lectures</div>
      </MobileOnly>

      {lectures}
    </section>
  )
}