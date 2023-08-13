import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container footer_blocks">
        <div className="about_us">
          <div className="numbers">
            <div className="order_number">
              <p>Для приема звонков</p>
              <h3>+994 50 123 45 67</h3>
            </div>
          </div>
          <h3>График работы по будням с 9:00 до 18:00</h3>
          <h2>Email: timur.yeskov@gmail.com</h2>
          <a>Поддержка</a>
          <div className="about__options">
            <h4>©2020. Пиросмани</h4>
            <h4>Условия и соглашения</h4>
            <h4>Политика конфиденциальности</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
