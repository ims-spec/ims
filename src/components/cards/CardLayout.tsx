import { CircleDashboardCard } from "../circles/CircleDashboardCard.tsx";
import { Link } from "react-router";
const CardLayout = () => {
  return (
    <div className="row g-4">
      <div className=" col-md-4">
        <Link to="/admin/goals">
          <CircleDashboardCard
            title="Загрузка данных"
            value={70}
            color="tomato"
          />
        </Link>
      </div>
          <div className="col-md-4">
              <Link to='/admin/users'>
        <CircleDashboardCard
          title="Пользователи"
          value={45}
          color="cornflowerblue"
          />
          </Link>
      </div>
      <div className="col-md-4">
        <CircleDashboardCard title="CPU Usage" value={87} color="seagreen" />
      </div>
    </div>
  );
};

export default CardLayout;
