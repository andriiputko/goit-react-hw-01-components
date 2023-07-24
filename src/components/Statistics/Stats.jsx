import data from './data';
import cl from './Stats.module.css';
const Stats = ({ key, title, stats }) => {
  return (
    <section className={cl.stats}>
      {title && <h2>{title}</h2>}

      <ul className={cl.list}>
        {data.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={cl.item}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={cl.label}>{label}</span>
              <span className={cl.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export default Stats;
