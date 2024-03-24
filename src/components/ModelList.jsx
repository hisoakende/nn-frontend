import './ModelList.css'

import spinImage from '/spin.png'
import warningImage from '/warning.png'
import draftImage from '/draft.png'

function ModelList() {
  return (
    <ul id='model-list'>
      <li className='model-element'>
        <p className='model-element-name'>Длинное название</p>
        <img className='model-element-status-image' src={spinImage} alt='В обработке'/>
      </li>
      <li className='model-element'>
        <p className='model-element-name'>Очень длинное название</p>
      </li>
      <li className='model-element'>
        <p className='model-element-name'>Короткое название</p>
        <img className='model-element-status-image' src={warningImage} alt='Ошибка!'/>
      </li>
      <li className='model-element'>
        <p className='model-element-name'>Имя модели 1</p>
        <img className='model-element-status-image' src={spinImage} alt='В обработке'/>
      </li>
      <li className='model-element'>
        <p className='model-element-name'>Имя модели 2</p>
        <img className='model-element-status-image' src={draftImage} alt='В обработке'/>
      </li>
    </ul>
  )
}

export default ModelList