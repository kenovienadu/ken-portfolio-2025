
const youtubeLectures = [
  {
    title: 'Building a Javascript Development Environment',
    link: 'https://www.youtube.com/embed/swikeXyXkhQ?si=6-DI_0fSmEYk_pXh'
  }
]

export default function LecturesPage() {
  const lectures = youtubeLectures.map((lecture, index) => {
    return (
      <div className="bg-gray-800 p-6 rounded-md" key={index}>
        <div className="mb-4">{lecture.title}</div>
        <iframe
          width="650" height="450" src={lecture.link}
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    )
  })

  return (
    <section>
      {lectures}
    </section>
  )
}