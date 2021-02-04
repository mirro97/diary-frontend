// 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
const deepObject = {
    state: {
        information: {
            name: 'sujeong',
            languages: ['css', 'html', 'javascript', 'c++']
        }
    },
    value : 5
}

const {name, languages} = deepObject.state.information;
const {value} = deepObject;

// 특정 객체를 만들때, 특정 key 이름으로 선언된 값이 이미 있다면 value값 설정하는 부분은 생략 가능
const extracted = {
    name,
    languages,
    value
};

console.log(extracted);