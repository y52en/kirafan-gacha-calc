import init from "./wasm/kirafan_gacha_calc.js";
import * as gacha_calc from "./wasm/kirafan_gacha_calc.js";

self.addEventListener('message', async function (e) {
    await init()
    // let [mx_retry, p1, p2, n0, n2] = e.data
    self.postMessage(gacha_calc.calc(...e.data))
}, false);