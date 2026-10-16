import { AABB } from "./aabb.js";

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

/**@type {HTMLButtonElement} */
const btn = document.getElementById("btn0");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

aabb = new AABB(0,0,100,100);

function loop() {


    requestAnimationFrame(loop);

}

loop();