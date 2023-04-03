import Logo from './img/logo.png';
import s from './Main.module.css';

const ProgressBar = ({ progress }) => {
  const styles = {
    width: "278px",
    height: "36px",
    background: "#EDECFF",
    border: "2px solid #565EEF",
  };

  const barStyles = {
    width: `${progress}%`,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "blueviolet",
    border: "22px 0px 0px 22px",
  };

  const barColor = [
    { width: "100%", background: "#0984e3" },
    { width: "60%", background: "#d63031" },
    { width: "40%", background: "#6c5ce7" },
  ];

  return (
    <div className={s.bar}>
      <div style={{ ...barStyles, ...barColor[progress - 1] }}>{progress}%</div>
    </div>
  );
};

export const Main = () => {
    return (
      <div className={s.lessons}>
        <header className={s.header}>
          <img className={s.logo} src={Logo} alt="logo" />
          <button className={s.button}>Войти</button>
        </header>
        <div className={s.title}>
          <div>
            <p className={s.yoga}>Йога</p>
            <p className={s.description}>
            Красота и здоровье / Йога на каждый день / 2 день
            </p>
          </div>
          <div>
          <iframe className={s.video} width="1160" height="639" src="https://www.youtube.com/embed/oqe98Dxivns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className={s.about}>
            <div className={s.exercises}>
              <h2>Упражнения</h2>
              <p>
              Наклон вперед (10 повторений) <br />
              Наклон назад (10 повторений) <br />
              Поднятие ног, согнутых в коленях (5 повторений) <br />
              </p>
              <button className={s.exercises_button}>Заполнить свой прогресс</button>
            </div>
            <div className={s.progress}>
            <h2>Мой прогресс по тренировке 2:</h2>
              <div className={s.progress_bar}>
            <p className={s.progress_info}>Наклоны вперед</p><ProgressBar progress={45} title="Completed" />
              </div>
              <div className={s.progress_bar}>
            <p className={s.progress_info}>Наклоны назад</p><ProgressBar progress={45} title="Completed" />
              </div>
              <div className={s.progress_bar}>
            <p className={s.progress_info}>Поднятие ног, согнутых в коленях</p><ProgressBar progress={45} title="Completed" />
              </div>


            </div>
            </div>
          </div>
        </div>
    );
}