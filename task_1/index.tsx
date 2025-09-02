// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import React, { Component, useEffect } from 'react';

export type IUser = {
  name: string;
  age: number;
};

export type IProps = {
  user: IUser;
};


export const FirstComponent = React.memo(({ name, age }: IUser) => {
  console.log('FirstComponent has been updated');

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

export const SecondComponent = React.memo(
  ({ user: { name, age } }: IProps) => {
    useEffect(() => {
      console.log('SecondComponent has been updated');
    });

    return (
      <div>
        my name is {name}, my age is {age}
      </div>
    );
  },
  (prevProps, nextProps) => {
    console.log(1);
    // Сравниваем значения свойств user, а не ссылку на объект
    return (
      prevProps.user.name === nextProps.user.name &&
      prevProps.user.age === nextProps.user.age
    );
  }
);

export class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps: IUser) {
    return this.props.name !== nextProps.name || this.props.age !== nextProps.age;
  }

  render() {
    console.log('ThirdComponent has been updated');

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    const currentUser = this.props.user;
    const nextUser = nextProps.user;
    return currentUser.name !== nextUser.name || currentUser.age !== nextUser.age;
  }

  render() {
    console.log('FourthComponent has been updated');

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
