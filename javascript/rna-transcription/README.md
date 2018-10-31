# RNA Transcription

Given a DNA strand, return its RNA complement (per RNA transcription).

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and thymine (**T**).

The four nucleotides found in RNA are adenine (**A**), cytosine (**C**),
guanine (**G**) and uracil (**U**).

Given a DNA strand, its transcribed RNA strand is formed by replacing
each nucleotide with its complement:

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`

---

*RNA Transcription*

DNA 가닥을 입력받아 RNA 쌍을 반환한다.
DNA와 RNA가닥은 모두 뉴클리오티드를 배열한 것이다.
DNA에서 찾을 수 있는 4개의 뉴클리오티드는 아데닌(A), 사이토신(C), 구아닌(G), 티민(T)이다.
RNA에서 찾을 수 있는 4개의 뉴클리오티드는 아데닌(A), 사이토신(C), 구아닌(G), 그리고 유라실(U)이다.

DNA 가닥이 주어졌을 때, 이를 전사한 RNA 가닥은 각각의 뉴클리오티드와 그 상보쌍으로 대체된 것으로 이뤄진다.

G -> C
C -> G
T -> A
A -> U

---

## Setup

Go through the setup instructions for Javascript to
install the necessary dependencies:

[https://exercism.io/tracks/javascript/installation](https://exercism.io/tracks/javascript/installation)

## Requirements

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.


## Source

Hyperphysics [http://hyperphysics.phy-astr.gsu.edu/hbase/Organic/transcription.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Organic/transcription.html)

## Submitting Incomplete Solutions
It's possible to submit an incomplete solution so you can see how others have completed the exercise.
