"use strict";function generateCodebaseUrl(a){var b=a.component;return endsWith(b.repository_url,"/")||(b.repository_url+="/"),b.repository_url+"tree/"+b.codebase}function endsWith(a,b){return-1!==a.indexOf(b,a.length-b.length)}angular.module("jbossSetApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.otherwise({redirectTo:"/"})}]),angular.module("jbossSetApp").controller("MainCtrl",["$scope","$http",function(a,b){b.get("default.streams.json").success(function(b){a.streams=b.streams}),a.orderProp="name",a.streamChange=function(){var b=a.data.selectedStream;a.selectedStream=a.streams[b],a.components=a.selectedStream.codebases;var c=a.data.selectedComponent;a.component=a.components[c],a.component.codebaseUrl=generateCodebaseUrl(a)},a.componentChange=function(){var b=a.data.selectedComponent;a.component=a.components[b],a.component.codebaseUrl=generateCodebaseUrl(a)}}]),angular.module("jbossSetApp").run(["$templateCache",function(a){a.put("views/streamSelector.html",'<!--\n/*\n * JBoss, Home of Professional Open Source.\n * Copyright 2015, Red Hat, Inc., and individual contributors\n * as indicated by the @author tags. See the copyright.txt file in the\n * distribution for a full listing of individual contributors.\n *\n * This is free software; you can redistribute it and/or modify it\n * under the terms of the GNU Lesser General Public License as\n * published by the Free Software Foundation; either version 2.1 of\n * the License, or (at your option) any later version.\n *\n * This software is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public\n * License along with this software; if not, write to the Free\n * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA\n * 02110-1301 USA, or see the FSF site: http://www.fsf.org.\n */\n--> <div ng-controller="MainCtrl" class="container-fluid"> <!--Body content--> <form name="myForm"> <label for="streamSelect">Stream: </label> <select name="streamSelect" id="streamSelect" ng-model="data.selectedStream" ng-change="streamChange()"> <option ng-repeat="stream in streams" value="{{$index}}">{{stream.name}}</option> </select> <label for="componentSelect">Component: </label> <select name="componentSelect" id="componentSelect" ng-model="data.selectedComponent" ng-change="componentChange()"> <option ng-repeat="component in components" value="{{$index}}">{{component.component_name}}</option> </select> </form> <hr> <p> Stream = {{selectedStream.name}}<br> Component = {{component.component_name}}<br> Repository = <a href="{{component.repository_url}}" target="_blank">{{component.repository_url}}</a><br> Branch = {{component.codebase}}<br> URL = <a href="{{component.codebaseUrl}}" target="_blank">{{component.codebaseUrl}}</a> </p> </div>'),a.put("views/streamTable.html","<!--\n/*\n * JBoss, Home of Professional Open Source.\n * Copyright 2015, Red Hat, Inc., and individual contributors\n * as indicated by the @author tags. See the copyright.txt file in the\n * distribution for a full listing of individual contributors.\n *\n * This is free software; you can redistribute it and/or modify it\n * under the terms of the GNU Lesser General Public License as\n * published by the Free Software Foundation; either version 2.1 of\n * the License, or (at your option) any later version.\n *\n * This software is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU\n * Lesser General Public License for more details.\n *\n * You should have received a copy of the GNU Lesser General Public\n * License along with this software; if not, write to the Free\n * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA\n * 02110-1301 USA, or see the FSF site: http://www.fsf.org.\n */\n--><!--TODO--><!--<p>Stream Table!</p>-->")}]);