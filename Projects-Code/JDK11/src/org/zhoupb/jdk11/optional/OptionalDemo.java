package org.zhoupb.jdk11.optional;

import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        test1();
    }

    public static void test1() {
        Optional<String> optional = Optional.ofNullable(null);
        // 如果内部引用为空返回参数引用，否则返回内部引用
        // 无论是否为空orElse都会执行
        String str = optional.orElse("a");
        System.out.println(str);

        // 只有当为null时，orElseGet才会执行
        str = optional.orElseGet(() -> "b");
        System.out.println(str);

        // 当为null时，抛出异常
        str = optional.orElseThrow();
        System.out.println(str);
    }
}
