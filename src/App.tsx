import "./App.css";
import { PopoverUK } from "./components";
import { NavigationMenuUK } from "./components/UK/navigation-menu-uk/navigation-menu-uk";
import { BasePart } from "./components/base-part/base-part";
import { BasePartItem } from "./components/base-part/parts/base-part-item";
import TabsDemo from "./components/tabs-demo/TabsDemo";

const navigationItems = [
  {
    isSubMenu: true,
    trigger: "Вкладка номер 1",
    content: [
      { href: "ya.ru", text: "Ссылка номер 1", description: "text text text" },
      {
        href: "google.com",
        text: "Ссылка номер 2",
        description: "text text text",
      },
    ],
  },
  {
    isSubMenu: true,
    trigger: "Еще одна вкладка",
    content: [
      { href: "ya.ru", text: "Ссылка номер 1", description: "text text text" },
      {
        href: "google.com",
        text: "Ссылка номер 2",
        description: "text text text",
      },
    ],
  },
  {
    isSubMenu: true,
    trigger: "Третья вкладка",
    content: [
      { href: "ya.ru", text: "Ссылка номер 1", description: "text text text" },
      {
        href: "google.com",
        text: "Ссылка номер 2",
        description: "text text text",
      },
    ],
  },
  {
    isSubMenu: false,
    trigger: "Четвертая вкладка",
    href: 'ya.ru',
  }
];

function App() {
  return (
    <div className="app">
      <h1>ui kit based on Radix</h1>
      <BasePart
        title="Navigation menu"
        subtitle="Переключение по tab. Toggle на enter, esc на закрытие."
        codeExample={`const navigationItems = [
          {
            isSubMenu: true,
            trigger: "Вкладка номер 1",
            content: [
              { href: "ya.ru", text: "Ссылка номер 1", description: "text text text" },
              {
                href: "google.com",
                text: "Ссылка номер 2",
                description: "text text text",
              },
            ],
          },
        ];

<NavigationMenuUK navigationItems={navigationItems} />`}
      >
        <NavigationMenuUK navigationItems={navigationItems} />
      </BasePart>
      <BasePart
        title="Popover"
        subtitle="Переключениe на следующий элемент по tab. Открытие на enter, закрытие
          на esc."
        propsList={
          <ul>
            <li>
              <b>defaultOpen?</b>: открыто сообщение ли по умолчанию. По первому
              клику на внешней области закрывается.
            </li>
            <li>
              <b>side?</b>: сторона элемента, относительно которой будет
              открываться попап.
            </li>
            <li>
              <b>sideOffset?</b>: margin-отступ от элемента, на котором
              открывается попап.
            </li>
            <li>
              <b>modal?</b>: возможность взаимодействия с остальными частями
              страницы. К примеру, при false срабатывают hover эффекты у других
              кнопок на странице.
            </li>
            <li>
              <b>align?</b>: выравнивание попапа относительно якоря по
              вертикали.
            </li>
            <li>
              <b>alignOffset?</b>: padding-отступ от якоря, на котором
              открывается попап (работает с align: 'start' и 'end').
            </li>
            <li>
              <b>avoidCollisions?</b>: отключает возможность попапа выходить за
              пределы экрана или сталкиваться с другими элементами
              (автоматически меняются параметры).
            </li>
            <li>
              <b>collisionBoundary?</b>: дистанция в пикселях, на которую не
              должно произойти столкновение с границей.
            </li>
            <li>
              <b>collisionPadding?</b>: скрывает попап, если якорь полностью
              скрыт.
            </li>
            <li>
              <b>arrowWidth?</b>: ширина стрелки.
            </li>
            <li>
              <b>arrowHeight?</b>: высота стрелки.
            </li>
            <li>
              <b>asChildArrow?</b>: отключает дефолтную стрелку от попапа, и
              использует кастомную. Если передать true, но не передать
              customArrow, то стрелка скроется.
            </li>
            <li>
              <b>customArrow?</b>: кастомная стрелка.
            </li>
            <li>
              <b>closeElement?</b>: если значение передано, то внутри попапа
              будет элемент закрытия.
            </li>
            <li>
              <b>contentChildren?</b>: содержимое попапа.
            </li>
            <li>
              <b>disabledOutside?</b>: отключает возможность закрытия попапа по
              клику на внешнюю область.
            </li>
          </ul>
        }
        codeExample={`<PopoverUK   
  side={"top"}
  sideOffset={30}
  modal={false}
  align="start"
  triggerTitle="Trigger"
>
  <TabsDemo />
</PopoverUK>`}
      >
        <BasePartItem partDescription="Настроенный пример. Нельзя скролить пока открыт. ">
          <PopoverUK
            side={"right"}
            sideOffset={30}
            align="start"
            triggerTitle="Trigger"
          >
            <TabsDemo />
          </PopoverUK>
        </BasePartItem>
        <BasePartItem partDescription="Дефолтный вариант">
          <PopoverUK triggerTitle="Title" modal={false}>
            <p>Я просто какой-то текст</p>
          </PopoverUK>
        </BasePartItem>
      </BasePart>
    </div>
  );
}

export default App;
