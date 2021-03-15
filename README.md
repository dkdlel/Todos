# 일정 관리 웹 애플리케이션
* 모두의 주차장 개발을 하면서 최적화의 중요성을 느낌
* ListItem의 갯수가 늘어날 경우 리스트를 한번에 가져오면 속도가 느려짐
* 최적화를 통해 보여지지 않는 부분들은 렌더링을 하지 않는것이 목표

## 느려지는 원인
1. App 컴포넌트의 state가 변경
2. 부모 컴포넌트가 리렌더링되었으니 TodoList가 리렌더링
3. 변경되지 않는 항목들도 리렌더링됨

## useMemo
* shouldComponentUpdate 라이프사이클을 사용하여 컴포넌트의 리렌더링 방지
* 컴포넌트의 props가 바뀌지 않았다면, 리렌더링 하지 않도록 설정

[참고] : https://yzzzzun.tistory.com/41

## useReducer
* useState로 상태를 관리하는 것이 아닌 useReducer를 통하여 상태를 관리
 - 다양한 상태(insert, remove, toggle)를 관리하기 위해 state가 아닌 reducer를 사용
 - 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호
```
const [state, dispatch] = useReducer(reducer, initialArg, init);

세번째 parameter : 초기 state를 조금 지연해서 생성하기 위해 init 함수를 세 번째 인자로 전달
                 맨처음 렌더링 될때만 함수 호출
```
* React는 dispatch 함수의 동일성이 안정적이고 리렌더링 시에도 변경되지 않으리라는 것을 보장
    - useEffect나 useCallback 의존성 목록에 이 함수를 포함하지 않아도 괜찮은 이유

* 초기화
    - React에서는 Reducer의 인자로써 state = initialState와 같은 초기값을 나타내는, Redux에서는 보편화된 관습을 사용하지 않음
    - 만약 초기값을 나타내는 것이 정말 필요하다면 useReducer(reducer, undefined, reducer)를 호출하는 방법으로 Redux를 모방할 수는 있지만 권장하진 않음

* 장단점

|장점|단점|
|:---:|:---:|
|상태를 업테이트하는 로직을 모아서 컴포넌트 바깥에 둘 수있음|기존 코드를 많이 고쳐야 함|

[참고] : https://ko.reactjs.org/docs/hooks-reference.html#usereducer

## windowing 기법
* 목록을 가상화 하는 방법
* 사용자에게 실제로 보이지 않는 컴포넌트는 렌더링하지 않고 영역만 차지하고 있다가 스크롤이되면 그 스크롤 위치에 있는 컴포넌트만 렌더링하여 보여주는 방식

    ### react-window vs react-virtualized
    * react-window는 react-virtualized를 완전히 재작성(경량화)한 것이다
        - react-window : https://github.com/bvaughn/react-window
            + example : https://react-window.now.sh/#/examples/list/fixed-size
        - react-virtualize : https://github.com/bvaughn/react-virtualized
            + example : https://bvaughn.github.io/react-virtualized/#/components/List
    * react windowing + lazy loading : https://codesandbox.io/s/5wqo7z2np4

* yarn add react-virtualized
    - 사전작업 : 각 항목의 실제 크기를 px단위로 알아내는 것

[참고]

windowing : https://velog.io/@kimjh96/react-virtualized-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94

react-window vs react-virtualized : https://praekiko.medium.com/what-is-windowing-also-i-have-heard-about-react-window-and-react-virtualized-c29dc843f4e0
