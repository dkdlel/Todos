# 일정 관리 웹 애플리케이션
* 모두의 주차장 개발을 하면서 최적화의 중요성을 느낌
* ListItem의 갯수가 늘어날 경우 리스트를 한번에 가져오면 속도가 느려짐
* 최적화를 통해 보여지지 않는 부분들은 렌더링을 하지 않는것이 목표

## useMemo
* TodoListItem에서 props가 바뀌지 않을 경우 리렌더링을 하지 않음

## useReducer
* useState로 상태를 관리하는 것이 아닌 useReducer를 통하여 상태를 관리
 - 다양한 상태(insert, remove, toggle)를 관리하기 위해 state가 아닌 reducer를 사용
 - 다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호
```
const [state, dispatch] = useReducer(reducer, initialArg, init);

세번째 parameter : 초기 state를 조금 지연해서 생성하기 위해 init 함수를 세 번째 인자로 전달, 맨처음 렌더링 될때만 함수 호출
```
* React는 dispatch 함수의 동일성이 안정적이고 리렌더링 시에도 변경되지 않으리라는 것을 보장
    - useEffect나 useCallback 의존성 목록에 이 함수를 포함하지 않아도 괜찮은 이유

* 초기화
    - React에서는 Reducer의 인자로써 state = initialState와 같은 초기값을 나타내는, Redux에서는 보편화된 관습을 사용하지 않음
    - 만약 초기값을 나타내는 것이 정말 필요하다면 useReducer(reducer, undefined, reducer)를 호출하는 방법으로 Redux를 모방할 수는 있지만 권장하진 않음

[참고] : https://ko.reactjs.org/docs/hooks-reference.html#usereducer