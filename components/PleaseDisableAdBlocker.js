import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./PleaseDisableAdBlocker.module.css";

const PleaseDisableAdBlocker = () => {
  const [show, setShow] = useState(false);

  // Code generated by NitroPay
  useEffect(() => {
    (function () {
      const a = {
        interval: 86400,
        delay: 0,
      };
      var b = new (function () {
        function a() {
          if (window.nitroAds && !0 === window.nitroAds.abp) return void d();
          var e = new Image();
          (e.onerror = () => {
            if ((c++, 3 > c)) setTimeout(a, 250);
            else {
              b.blocking = !0;
              try {
                localStorage.setItem("np.lastBlocked", new Date().getTime());
              } catch (a) {}
              document.dispatchEvent &&
                window.CustomEvent &&
                document.dispatchEvent(
                  new CustomEvent("np.detect", {
                    detail: {
                      blocking: b.blocking,
                    },
                  })
                );
            }
          }),
            (e.onload = () => d()),
            (e.src =
              "https://ad-delivery.net/px.gif?ch=1&" +
              Math.random() +
              "&adslot=");
        }
        this.blocking = !1;
        var c = 0,
          d = function () {
            try {
              var a = localStorage.getItem("np.lastBlocked");
              if (a) {
                localStorage.removeItem("np.lastBlocked");
                localStorage.setItem("np.unblocked", new Date().getTime() - +a);
                setShow(false);
              }
            } catch (a) {}
          };
        setTimeout(a(), 250);
      })();
      let c = null;
      const d = () => {
        const b = `; ${document.cookie}`,
          d = b.split(`; npabp=`);
        if (2 === d.length) return;
        let e = "";
        if (a.interval) {
          const b = new Date();
          b.setTime(b.getTime() + 1e3 * a.interval),
            (e = `expires=${b.toGMTString()};`);
        }
        document.cookie = `npabp=1; ${e} path=/;`;
        setShow(true);
      };
      document.addEventListener("np.detect", (b) => {
        b.detail.blocking
          ? setTimeout(d, a.delay)
          : c && c.parentNode && c.parentNode.removeChild(c);
      });
    })();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>
        Please consider disabling your ad-blocker for this site.
      </span>

      <span className={styles.text}>
        If we have helped you find an awesome name, help us keep the lights on!
        We keep ads as unobtrusive as possible. 😊
      </span>
      <div className={styles.button}>
        <Button onClick={() => setShow(false)}>Close</Button>
      </div>
    </div>
  );
};

export default PleaseDisableAdBlocker;