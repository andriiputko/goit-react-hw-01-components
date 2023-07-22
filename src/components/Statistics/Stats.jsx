import data from './data';

const Stats = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2>{title}</h2>}

      <ul class="stat-list">
        {data.map(({ label, percentage }) => {
          return (
            <li class="item">
              <span class="label">{label}</span>
              <span class="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
console.log(data);
export default Stats;
