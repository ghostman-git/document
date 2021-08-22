package org.zhoupb.jdk11.stream;

import java.util.stream.Stream;

public class StreamDemo {


    public static void main(String[] args) {
        //test1();
        //test2();
        test3();
    }

    public static void test1() {
        Stream<Integer> stream1 = Stream.of(1, 3, 4, 6);
        //stream1.forEach(t -> System.out.println(t));
        stream1.forEach(System.out::println);

        Stream<Integer> stream2 = Stream.of();
        stream2.forEach(System.out::println);

        // 不能设为null
        //Stream<Integer> stream3 = Stream.of(null);
        //stream3.forEach(System.out::println);

        Stream<Integer> stream4 = Stream.ofNullable(null);
        stream4.forEach(System.out::println);
    }

    public static void test2() {
        Stream<Integer> stream1 = Stream.of(1, 3, 4, 6);
        // 按顺序取符合条件的数据，遇到false即会终止
        Stream<Integer> takeWhile = stream1.takeWhile(t -> t % 2 != 0);
        takeWhile.forEach(System.out::println);
        System.out.println("----------------");

        Stream<Integer> stream2 = Stream.of(1, 3, 4, 6);
        // 删除所有符合条件的数据
        Stream<Integer> dropWhile = stream2.dropWhile(t -> t % 2 != 0);
        dropWhile.forEach(System.out::println);
    }

    public static void test3() {
        // 无限迭代
        Stream<Integer> stream1 = Stream.iterate(1, t -> (t * 2) + 1);
        stream1.limit(10).forEach(System.out::println);

        // 有限迭代
        Stream<Integer> stream2 = Stream.iterate(1, t -> t < 1000, t -> (t * 2) + 1);
        stream2.forEach(System.out::println);
    }
}
