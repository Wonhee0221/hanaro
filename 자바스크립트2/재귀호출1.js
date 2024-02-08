/*
재귀호출 : 함수자신이 자신을 호출하는 것을 말한다.
           내가 나를 호출하기 때문에 재귀호출
           시스템내의 스택을 활용해서 함수가 호출된다.
           잘못 호출하면 무한 재귀호출이 되어서 스택이 부족한 상황이 벌어진다,
           특히나 자바같은경우(옛날버전) 재귀함수 알고리즘은 속도가 엄청 느리고 메모리 fault가 발생
           프로그램은 재귀 구조를 사용했을 대 더 쉽게 작성할 수 있는 알고리즘이 있다.
           대표적으로 트리구조 순회

                    A
                B      C     문제 ) 트리의 노드를 하나도 빼놓지말고 순회하자
              D  E    F  G        inorder, preorder, postorder (깊이우선 탐색)
                                  level order (너비우선탐색, 큐)


          left = edge , 트리와 트리사이의 다리, 하노이의 탑
          right

          D = node방문할 데이터 
          inoder = LDR => DBEAFCG  - 왼쪽이 더 없을 때까지 내려감.
          preorder = DLR  => ABDECFG
          postorder = LRD -> DEBFGCA
         
          funtion f1() {
            ...
            f1();
            ...
          }

          함수의 매개변수를 전달해서 값이 자꾸 작아져야한다.
             funtion f1(n) {
            ...
            if (n==1)
              return 1;
            f1(n-1);
            ...
          }
          
*/
//1,2,3,5,6,7,8,9.10.....을 재귀호출로 해보자

function displayNumber(n){
  if (n==0)
      return n;
  displayNumber(n-1); // 자기가 자기를 호출할 때 n값이 계속 감소ㅇ되어야한다.
  console.log(n)
}

displayNumber(10);