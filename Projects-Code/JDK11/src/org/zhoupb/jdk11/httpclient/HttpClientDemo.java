package org.zhoupb.jdk11.httpclient;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class HttpClientDemo {

    public static void main(String[] args) throws IOException, InterruptedException, ExecutionException {
        //yncTest();
        asyncTest();
    }

    public static void syncTest() throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest httpRequest = HttpRequest
                .newBuilder(URI.create("https://www.baidu.com"))
                .build();
        HttpResponse.BodyHandler<String> responseBodyHandler = HttpResponse.BodyHandlers.ofString();
        HttpResponse<String> httpResponse = httpClient.send(httpRequest, responseBodyHandler);
        String body = httpResponse.body();
        System.out.println(body);
    }

    public static void asyncTest() throws ExecutionException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();
        HttpRequest httpRequest = HttpRequest
                .newBuilder(URI.create("https://www.baidu.com"))
                .build();
        HttpResponse.BodyHandler<String> responseBodyHandler = HttpResponse.BodyHandlers.ofString();
        CompletableFuture<HttpResponse<String>> completableFuture = httpClient.sendAsync(httpRequest, responseBodyHandler);
        HttpResponse<String> httpResponse = completableFuture.get();
        String body = httpResponse.body();
        System.out.println(body);
    }
}
