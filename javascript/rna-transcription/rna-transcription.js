// * RNA Transcription *

// DNA 가닥을 입력받아 RNA 쌍을 반환한다.
// DNA와 RNA가닥은 모두 뉴클리오티드를 배열한 것이다.
// DNA에서 찾을 수 있는 4개의 뉴클리오티드는 아데닌(A), 사이토신(C), 구아닌(G), 티민(T)이다.
// RNA에서 찾을 수 있는 4개의 뉴클리오티드는 아데닌(A), 사이토신(C), 구아닌(G), 그리고 유라실(U)이다.

// DNA 가닥이 주어졌을 때, 이를 전사한 RNA 가닥은 각각의 뉴클리오티드와 그 상보쌍으로 대체된 것으로 이뤄진다.

// G -> C
// C -> G
// T -> A
// A -> U

function toRna(str) {
  let newArr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes('A')) {
      newArr += 'U'
    } else if (str[i].includes('C')) {
      newArr += 'G'
    } else if (str[i].includes('G')) {
      newArr += 'C'
    } else if (str[i].includes('T')) {
      newArr += 'A'
    } else {
      throw new Error('Invalid input DNA.');
    }
  }
  return newArr;
}


export default toRna;
