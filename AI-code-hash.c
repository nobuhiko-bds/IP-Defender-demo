#include <stdio.h>

unsigned long hash(const char *str) {
    unsigned long hash = 5381;
    int c;
    while ((c = *str++))
        hash = ((hash << 5) + hash) + c; // hash * 33 + c
    return hash;
}

// 使用例
int main() {
    const char *data = "example";
    printf("Hash: %lu\n", hash(data));
    return 0;
}