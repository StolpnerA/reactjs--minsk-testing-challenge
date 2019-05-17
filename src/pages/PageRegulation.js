import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class PageRegulation extends Component {
  componentDidMount() {
    document.title = "inQA";
  }

  render() {
    return (
      <div>
        <h2>Регламент соревнования.</h2>

        <h3>Предметы тестирования:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Мобильное и веб приложение.
          </List.Item>
        </List>

        <h3>Цель соревнования:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Найти как можно больше багов за отведенное время.
          </List.Item>
        </List>

        <h3>Критерии оценки:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>Blocker баг до 10 баллов</List.Item>
          <List.Item as='li' value='-'>Blocker баг до 10 баллов</List.Item>
          <List.Item as='li' value='-'>Critical баг до 7 баллов</List.Item>
          <List.Item as='li' value='-'>Major баг до 5 баллов</List.Item>
          <List.Item as='li' value='-'>Miinor баг до 4 баллов</List.Item>
          <List.Item as='li' value='-'>Low\trivial баг до 3 баллов</List.Item>
          <List.Item as='li' value='-'>За неверную Severity минус 1 балл</List.Item>
          <List.Item as='li' value='-'>Ошибки в оформлении бага минус 1 балл</List.Item>
          <List.Item as='li' value='-'>Грамматические ошибки минус 1 балл</List.Item>
        </List>

        <h3>Необходимое оборудование:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Ноутбук с установленным Google Chrome (последний на момент проведения соревнования)
          </List.Item>
          <List.Item as='li' value='-'>
            Android версии 5 и выше(желательно), либо установленный эмулятор
          </List.Item>
        </List>
        
        <h3>Запрещаеться:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Проводить нагрузочное тестирование
          </List.Item>
          <List.Item as='li' value='-'>
            Мешать другим участникам соревнования
          </List.Item>
          <List.Item as='li' value='-'>
            Списывать баги найденные другими людьми
          </List.Item>
          <List.Item as='li' value='-'>
            Открывать мессенджеры во время соревнования
          </List.Item>
        </List>   

        <h3>Оформление багов:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Текстовой документ (word, libreoffice и т.п.), где каждый баг будет отдельно описан с его Severity. Шаблон документа будет предоставлен прямо перед началом.
          </List.Item>
        </List>

        <h3>Ограничения:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Improvements не учитываются
          </List.Item>
        </List>

        <h3>Дистрибуция:</h3>
        <List as='ol'>
          <List.Item as='li' value='-'>
            Всем участникам будет выслан архив с заданием. В момент старта будет объявлен пароль для доступа к архиву
          </List.Item>
        </List>
      </div>
    )
  }
}

export default PageRegulation;