function calc(mx_retry, p1, p2, n0, n2, pk1, pk2) {
    // const pk1 = array_Binomial_Distribution.bind(this)(
    //     iter_array(0, 10 + 1),
    //     10,
    //     p1
    // );
    // const pk2 = array_Binomial_Distribution.bind(this)(
    //     iter_array(0, n2 + 1),
    //     n2,
    //     p2
    // );

<<<<<<< HEAD
<<<<<<< HEAD
self.addEventListener('message', async function (e) {
    await init()
    // let [mx_retry, p1, p2, n0, n2] = e.data
    self.postMessage(gacha_calc.calc(...e.data))
=======
=======
>>>>>>> parent of 3967604... 計算処理wo
    function f_multi_retry(mx_retry) {
        let dp = Multi_array(mx_retry + 1, 1);
        dp[0][0] = 1;
        //eslint-disable-next-line
        for (let _ of range(n0)) {
<<<<<<< HEAD
            let dp2 = Multi_array(mx_retry + 1, dp[0].length + 10);
=======
            let dp2 = Multi_array(mx_retry + 1, Math.min(dp[0].length + 10,6+1));
>>>>>>> parent of 3967604... 計算処理wo
            for (let i of range(mx_retry + 1)) {
                for (let j of range(dp[0].length)) {
                    for (let k of range(10 + 1)) {
                        if (i !== mx_retry && k === 0) {
                            dp[i + 1][j] += dp[i][j] * pk1[0];
                        } else {
<<<<<<< HEAD
                            dp2[i][j + k] += dp[i][j] * pk1[k];
=======
                            dp2[i][Math.min(j + k,6)] += dp[i][j] * pk1[k];
>>>>>>> parent of 3967604... 計算処理wo
                        }
                    }
                }
            }
            dp = dp2;
        }
        let dp2 = Multi_array(mx_retry + 1, dp[0].length + n2);
        for (let i of range(dp[0].length)) {
            for (let j of range(n2 + 1)) {
                for (let k of range(mx_retry + 1)) {
                    dp2[k][i + j] += dp[k][i] * pk2[j];
                }
            }
        }
        dp = dp2;
        // console.log(dp);
        return array_sum_y(dp);
    }

    // function array_Binomial_Distribution(n, k, p) {
    //     let output = [];
    //     for (let i of n) {
    //         output.push(Number(wasm.Binomial_Distribution(k, i, p)));
    //     }
    //     return output;
    // }

    function array_sum_y(array) {
        let output = new Array(array[0].length);
        for (let y = 0; y < array[0].length; y++) {
            output[y] = 0;
            for (let x = 0; x < array.length; x++) {
                output[y] += array[x][y];
            }
        }
        return output;
    }

    function range(length) {
        return iter_array(0, length);
    }

    function Multi_array(x, y) {
        return Array.from(new Array(x), () => new Array(y).fill(0));
    }

    function iter_array(to, from) {
        return new Array(from - to).fill(null).map((_, i) => to + i);
    }

    let result = f_multi_retry(mx_retry);
    let gotCharaChance_Zero2five = 0;

    for (let i of range(5 + 1)) {
        gotCharaChance_Zero2five += result[i];
    }
    let higher6Chance = 1 - gotCharaChance_Zero2five;

    let outputGraph = new Array(7);
    for (let i of range(5 + 1)) {
        outputGraph[i] = result[i] || 0;
    }

    outputGraph[6] = higher6Chance || 0;

    return outputGraph.map((x) => x * 100);
}

self.addEventListener('message', function (e) {

    //何か同時進行で行う処理
    // console.log(e.data);
    // calc()

    //処理結果を送信
    // console.log(2);
    self.postMessage(calc(...e.data));
<<<<<<< HEAD
>>>>>>> parent of d83b1bc... 計算処理最適化
=======
>>>>>>> parent of 3967604... 計算処理wo
}, false);