package org.zhoupb.jdk11.array;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Stream;

public class ArrayDemo {

    public static void main(String[] args) {
        test1();
        System.out.println("----------------------------------");
        test2();
    }

    public static void test1() {
        List<String> list1 = Arrays.asList("a", "b", "ab", "ac");
        // list1.add("yy"); // 无法添加
        System.out.println(list1);

        List<String> list2 = List.of("a", "b", "ab", "ac");
        //list2.add("yy"); // 无法添加 /
        System.out.println(list2);
    }

    public static void test2() {
        LocalDate localDate = LocalDate.of(2021, 8, 23);
        System.out.println(localDate);

        Set<String> set1 = Set.of("1", "32", "3");
        System.out.println(set1);

        // Set<String> set2 = Set.of("1", "32", "3", "1");  // 无法添加重复数据
        // System.out.println(set2);

        Stream<String> stream = Stream.of("1", "32", "3", "1");
        System.out.println(Arrays.toString(stream.toArray()));
    }
}
