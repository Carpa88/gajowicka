const Schedule = () => {
  return (
    <section id="classes">
      <h2 className="section-title">Zajęcia w Centrum Gajowickim</h2>

      <div className="classes-block">
        <div className="block-day">
          <h3>Poniedziałek</h3>
          <p>
            <strong>09:00 – 10:00</strong> Gimnastyka dla seniorów
          </p>
          <p>
            <strong>11:00 – 12:30</strong> Warsztaty komputerowe (podstawy)
          </p>
          <p>
            <strong>16:00 – 17:00</strong> Plastyka dla dzieci (6–10 lat)
          </p>
          <p>
            <strong>18:00 – 19:00</strong> Joga relaksacyjna
          </p>
          <p>
            <strong>19:15 – 20:15</strong> Fitness – zdrowy kręgosłup
          </p>
        </div>
        <div className="block-day today">
          <h3>Wtorek</h3>
          <p>
            <strong>08:30 – 09:30</strong> Pilates
          </p>
          <p>
            <strong>10:00 – 11:00</strong> Konwersacje z języka polskiego A1
          </p>
          <p>
            <strong>15:00 – 16:00</strong> Warsztaty kreatywnego pisania
          </p>
          <p>
            <strong>17:00 – 18:00</strong> Zumba
          </p>
        </div>
        <div className="block-day">
          <h3>Środa</h3>
          <p>
            <strong>09:00 – 10:00</strong> Zdrowy kręgosłup
          </p>
          <p>
            <strong>11:30 – 12:30</strong> Kurs obsługi smartfona
          </p>
          <p>
            <strong>16:00 – 17:00</strong> Matematyka dla dzieci (zabawy
            logiczne)
          </p>
          <p>
            <strong>18:00 – 19:00</strong> Joga dynamiczna
          </p>
        </div>
        <div className="block-day">
          <h3>Czwartek</h3>
          <p>
            <strong>08:00 – 09:00</strong> Gimnastyka poranna
          </p>
          <p>
            <strong>10:00 – 11:30</strong> Klub książki
          </p>
          <p>
            <strong>16:30 – 17:30</strong> Zajęcia plastyczne (nastolatki)
          </p>
          <p>
            <strong>18:00 – 19:00</strong> Stretching
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
