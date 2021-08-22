package org.zhoupb.jdk11.var;

import java.util.ArrayList;
import java.util.Locale;
import java.util.function.Consumer;

public class VarDemo {
    public static void main(String[] args) {
        var a = "abc";
        a = "bcd";

        var b = new ArrayList<String>();
        b.add(a);
        //b.add(12);

        Thread t = new Thread(() -> System.out.println(Thread.currentThread().getName()));
        t.start();
        t.run();

        Consumer<String> consumer1 = c -> System.out.println(c.toUpperCase());
        Consumer<String> consumer2 = (var c) -> System.out.println(c.toUpperCase());
        Consumer<String> consumer3 = (@Deprecated var c) -> System.out.println(c.toUpperCase());
    }
}
