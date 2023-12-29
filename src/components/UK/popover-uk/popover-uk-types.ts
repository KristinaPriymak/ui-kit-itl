type Side = 'top' | 'right' | 'bottom' | 'left'

export type PopoverUKProps = {
    defaultOpen?: boolean
    side?: Side
    sideOffset?: number
    modal?: boolean
    align?: 'start' | 'center' | 'end'
    alignOffset?: number
    avoidCollisions?: boolean
    collisionBoundary?: Element | null | Array<Element | null>
    collisionPadding?: number | Partial<Record<Side, number>>
    hideWhenDetached?: boolean
    arrowWidth?: number
    arrowHeight?: number
    asChildArrow?: boolean
    customArrow?: JSX.Element
    children: JSX.Element
    triggerTitle: JSX.Element | string
    isCloseOutside?: boolean
    disabledOutside?: boolean
}

/*
    defaultOpen?: открыто сообщение ли по умолчанию. По первому клику на внешней области закрывается.
    side?: сторона элемента, относительно которой будет открываться попап
    sideOffset?: margin-отступ от элемент, на котором открывается попап
    modal?: возможность взаимодействия с остальными частями страницы. К примеру, при false срабатывают hover эффекты у других кнопок на странице.
    align?: выравнивание попапа относительно якоря по вертикали
    alignOffset?: padding-отступ от якоря, на котором открывается попап (работает с align: 'start' и 'end')
    avoidCollisions?: отключает возможность попапа выходить за пределы экрана или сталкиваться с другими элементами (автоматически меняются параметры)
    collisionBoundary?: дистанция в пикселях, на которую не должно произойти стакливание с границей
    collisionPadding?: скрывает попап, если якорь полностью скрыт 
    arrowWidth?: ширина стрелки
    arrowHeight?: высота стрелки
    asChildArrow?: отключает дефолтную стрелку от попапа, и использует кастомную. Если передать true, но не передать customArrow, то стрелка скроется
    customArrow?: кастомная стрелка
    closeElement?: если значение передано, то внутри попапа будет элемент закрытия
    contentChildren: содержимое попапа
    disabledOutside?: отключает возможность закрытия попапа по клику на внешнюю область
*/