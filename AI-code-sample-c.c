#include <stdio.h>

double average_1_to_N(int N) {
    int sum = 0;
    for (int i = 1; i <= N; i++) {
        sum += i;
    }
    return (double)sum / N;
}

int main() {
    int N;
    printf("Nの値を入力してください: ");
    scanf("%d", &N);

    printf("1から%dまでの平均値: %f\n", N, average_1_to_N(N));
    return 0;
}