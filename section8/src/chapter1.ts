// 인덱스드 엑세스 타입

// 객체 예시
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  }; // 여기까지가 0번
}[]; // 여러개를 저장하는

function printAuthorInfo(author: PostList[number]["author"]) {
  // 인덱스드 엑세스 "타입"! 값이 아님 author: Post["author"]["id"] 로 특정 객체도 뽑아올 수 있음
  console.log(`${author.name}-${author.id}`);
}

const post: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "문신웅",
    age: 30,
  },
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupNum = Tup[number]
