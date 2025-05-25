import NewsCard from "@/components/NewsCard";

const news = [
  {
    id: 1,
    title: "Next.js 14 выпущен с новыми функциями",
    summary: "Команда Vercel анонсировала выпуск Next.js 14 с улучшенной производительностью.",
    date: "2023-10-25",
    category: "Технологии",
    image: "/tech-news.jpg"
  },
  {
    id: 2,
    title: "Искусственный интеллект в медицине",
    summary: "Новые алгоритмы ИИ помогают диагностировать заболевания.",
    date: "2023-10-20",
    category: "Здоровье",
    image: "/health-news.jpg"
  },
  {
    id: 3,
    title: "Климатические изменения ускоряются",
    summary: "Темпы глобального потепления превысили прогнозы.",
    date: "2023-10-15",
    category: "Экология",
    image: "/eco-news.jpg"
  }
];

export default function Home() {
  return (
      <div className="news-container">
        <h1 className="page-title">Последние новости</h1>
        <div className="news-grid">
          {news.map((item) => (
              <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
  );
}