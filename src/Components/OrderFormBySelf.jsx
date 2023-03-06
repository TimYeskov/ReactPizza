import React,{useState} from 'react'

const OrderFormBySelf = () => {

    const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const [orderAdress, setOrderAdress] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    if (userName === '') {
      setError('Please enter a username.');
      return;
    }

    if (number === '') {
      setError('Please enter a number.');
      return;
    }
    
    if (orderAdress === '') {
        setError('Please enter a password.');
        return;
      }

    // отправить данные формы на сервер
  };

  return (

    <form onSubmit={handleSubmit} className="order-form">


      <div class="form-group">
        <label for="formGroupExampleInput2">ФИО</label>
        <input 
        type="text" class="form-control"
         id="formGroupExampleInput2" placeholder="Введите Ваше полное имя"
         value={userName}
          onChange={(event) => setUserName(event.target.value)}/>
      </div>
 
  <label class="sr-only" for="inlineFormInputGroupUsername2">Телефон</label>
  <div class="input-group mb-4 mr-sm-2">
    <div class="input-group-prepend">
      <div class="input-group-text">+994</div>
    </div>
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username"
        onChange={(event) => setNumber(event.target.value)}
        value={number}/>
  </div>

  
  <div class="form-group col-md-8">
      <label for="inputState">Когда заберете?</label>
      <select id="inputState" class="form-control">
        <option selected>В ближайшее время</option>
        <option>в течении 40 мминут</option>
        <option>Дольше 40 минут</option>
      </select>
    </div>

{error && <div className="error">{error}</div>}

      <button type="submit">Оформить заказ</button>
    </form>
  )
}

export default OrderFormBySelf
