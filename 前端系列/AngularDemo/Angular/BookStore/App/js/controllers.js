﻿var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', function ($scope) {
    $scope.name = "LSW";
    $scope.pageClass = "hello";
});

bookStoreCtrls.controller('BookListCtrl', function ($scope) {
    $scope.books = [
        { title: "围城", author: "钱钟书" },
        { title: "鬼话三国", author: "寒雨潇风" },
        { title: "白夜行", author: "东野圭吾" },
        { title: "山海经", author: "郭璞" }
    ];
    $scope.pageClass = "list";
});
