"use strict";

import { helloWorld } from "hello-world";
import { test, hoge } from "test";

function alohaWorld() {
  helloWorld();
  test();
  console.log(hoge());
}

alohaWorld();
