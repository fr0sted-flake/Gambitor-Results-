import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import footerImg from "@/images/common/footer/footer.png"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="part1">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAEGCAYAAABMy4jrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABiKSURBVHgB7Z3deds4FoYPZSe3661g6QrWqWCV65nZtSuIXEGcCiJXkKSCKBXYk8xcW1NBPBVYU0E8t7HjswAI2foj/giApPS9z6PROKJIisSHc4BzcEgEosMXVPLv9Fa+EwhGXL8DfR0PCDRiQCA6xQnNiGlI+3QFwfszFzg9oxtxHUtxPW8JNKIgkAT+IoRe0FX1hxD+gCb0nT6pTgBsRFnu5/RaXK8z8Wdlxe/oENesORB6Qvg3JfTh0z9A8JvYKPCKSfEznRJoDISekCWrvvQBBC8xCLwC1jwaEHpi1qz6OhPRoM93qUGrOYs9GovO7pVhM1jziEDoiam16utsveAdBV4Bax4VCD0DDlZ9ka0TvJfAK2DNIwOhZ8DDqi/Se8EHCLwC1jw6EHomPK36Ir0TvOrYmEbeAq+ANU8AEmZywXROYYxk4ojoKEJEkx2V6CK9l0Hg+d4FXydgAELPRPELTcXblEJhOqQ+8KPReU7gsqdhn0A+pFUvgtz3sMN9aX4s3UHlAdY8GRB6RqRohAs+Jcokdv8JwGVYWddcngSseULguueGYbU2AmueFAg9M43H6tsJrHliIPQ2gFVfBtY8ORB6C8CqLwFrngEIvS1g1StgzbMAobcErLoC1jwTEHqb7LpVhzXPBoTeIjtu1WHNMwKht82uWnVY86xg9VoHcFzZdq1fPoyoGbL66qXXN1gtyS0tW2GFWmYg9A4QuF69v2C9eXbguneAHRurY2zeAhB6V9iVsTrG5q0AoXeEHbHqsOYtAaF3iW236rDmrQGhd4gtt+qw5i0CoXeNbbXqsOatAqF3jC216rDmLQOhd5Fts+qw5q2DhJmOwp9pIrrhf1HfYfpDeCljAgAAAAAAAAAAAAAAAAAAAAAAAADoCEiYaRlmPhBvX8WrJLDKdVEULwg0Bimw7fOWIPJNzMTrhEAUYNFbRFjzkXj7SGAVWZTyhbDmMwJRgNBbQoi8FG+yIGRJYJWXQuRTAtGA694eFwSRb+INRB4fCL0FhDWX4/IjAqucC5G/JxAduO6ZESKXAv9KYJVLIXJMviUCQs8IxuW1zKiafLslkAS47nkZE0S+yoyqyTeIPCEQeiaENX8t3l4RWOUUYbT07BPIxa/6tQuMqEoEcmFIu/voaAD6i0zrFa9v7MY3nQYMEgLXHURHj7c/OG4uRT4iAPqInGEXrxv2o6QtQVt1VxBuBP1ENN4J+zGmLUP8piuP3z8kAPqEaLQj9mMrLZoUr8c1uCIA+gL7u+xyMqqkLYX9rHpJIAmYjIuPXHZaemx/vuVxZJ+Q4ogA6DrCIr1mP7beXWWE2sA2wZXL7sMN74irKn7n2OO6jAmArsL+obSdSYdlv1DbDQHQRUTjfMt+7Fz5KEaoDfQZhsvuBCPU1ipYj94QrlzN0uMrIzHL/ol6DP9OR/RAmyfN7um6OKGNS061gIfkhlyffk0gCli91gCuSkKVHl/50HeRK36I3zxQNe82cUhEdWvLZahtSG6MxOuMQBRg0QPR40gfF3NGW1RFhX9TIny39sEdHQqLPtv4nSp0Jj0glxCavE6HKEgRByTMBKAbrO+E2uk2NdriZ3pP7LxCrfqO/6o2WPRIQOhh+Lrs59tYwrj4RQixoEvyw6fKKyryRAJC94Srp6v4WJqZEPmYtpXvdCr+6zxppq361HHz0jXUxsioMwKhe6DDYq4lkua8pC1GzbDf0Ylw42ceXzv32NZ6vSFyEBXGGvNaZMhNTNB94wu3IQ37JdAcGfZzAKGDaLD/GvOdS+Xkz3TsIfQzj2v53rAfiBzEgXe8LFQKGKvaQNcQjeyC/UBYyAHGqjbQFRhrzJPBfqvavhEAKeDKZXd1LyU3DJfdC/bzloYEQGwYa8yTw1jVBtqEscY8G4y16qANGGvMs8J+oUufFFoA6mG47FlhhNpAbhgueyswQm0gFwyXvTUYobakYFGLhit30HdW95bqq6kAD/SqNtclr7JTGBIAvrBfmGeRr4wxYxQYoTaQA/ZfuAKxR4YRagM5gNjbhRFqSwKKQ26AqyoyIbPpstLKy5DacNzzSb1YD4pkFJAEOWG/9dKNLTv7hZe6iG/lnVjXYkwANIHDxQexN7vuXgk0BEBTGGL3JZbYJx7HHBIATWGI3ZfGYmeE2kAbcLj4glJkGWJHqA20A0PsvjQSu/j+scexEGoD8eD8Yg+N63eFpmLHqjbQDgyx+xIsdkaoDbQJQ+y+BImdEWoDbcMQuy9BZbAZoTbQNpxZ7F2B/R9PNce7Gg/7Tcoh1AbSwBC7L85i58p1/+q3e1h1kAjeQbEHinCOVewN9o/yXiAdDLH78irRfscEQEoYYvflVeT9jQmAHDDE7oMMnR1F2I9kTADkhCF2H5TYGSIHfYR3V+w37I8UO0SeCJSSCoC1q1kUxbXDtmPxFpIVNhH7P6UAuCpLVZI/ty6/yfH4V4Hn4Mu5OOcxARAbrtZKL40tLdvnzqArOcyqSqI8XqrhObgyJgBSwU9FEbZV7EGpqpHPwcaYAEgJL1c/2VaxxyoJlULsYwIgNbxe5ghiT3cOq4wJgBzw5npmEHu6c5gzJgBywfWFCyH2dOcwJgBywuYKpVLsx477yS32JgkpbYp9TADkht1KETuFqThc7O8oAO6f2McEQBuwe83x1GJvUp6pC2K3lYgaEwBtwe5Cd652wrspdpnfXif2KLF8AILhBELX+4XYK0YEQNtwIqHrfe+62EcEQBfghELX+99VsY8IgK7AiYWuj7FzYgegU3AGoevjQOwAtAVnEro+FsQOQBtwRqHr40HsAOSG3YX+lSLBEDsAeWF3oUdt9NyO2C84DIgd9Bv2E3rURs+Zxa6POeEwIHbQX9hf6FEbPUPsAKSHq+SOVhs9Q+wApKcNoW04h/ccBsQOgCvcDbFnFx5D7GDXYIg92zEBaBWG2LMdE4BWYYg92zEBaBWG2H35SAD0EYbYfYHYQT9hiN0XiB30E4bYfYHYQT/h3RV76O+G2EE/YYjdF4gd9BOG2H2B2EE/YYjdF4gd9BOG2H2B2EE/YYjdF4gd9BOG2H2B2EE/YYjdF4gd9BOG2H2RVWkPCIC+wRC7LxA76CcMsfsCsYN+whC7LyUB0Ee4G2K/4jByi70kAPoKtyx2bulRTAG/uyQA+gxD7C6UBEDf4d0V+43jMUoCYBvgHRQ7Q+hgF+EdEztD6GBX4R0SO0PoYJfhHRE7Q+hg1+F+i/3M8Rg3jvsrCYBthcPF/o4iwOFid1p9xhB6EgYEekVRFGPxdk7+nHGEpZ7i+Lfi7aV4XRPoDRB6S0iLxFW6aUmeNBD7iB1daMvxIfaeAaG3gBb3lXgN5XtmsUdZ9QWx9wsIPTNC1EdUibzU/yTfc4s9ChB7f4DQM7JB5HPk3xA7SAaEnokFkde5ziVB7CAREHoGHEQ+pySIHSQAQk+Mh8jnlFSJ/Yg8gdhBHRB6QgJEvsgtBQCxg01A6IloIPKZeL0UgplRIBA7WAVCT0CbIp8DsYNFIPTIdEHkczok9hmBVoHQI9Ilkc/pkNj/IgD6jhS5eH1jf25yrMTip1VvY+owjNVrSdgn0JguWvJVpGUX50kAgACEeIZdtuQbzrekDsOw6KBriMb2isO4QUPdDEPoScBkXCBS5OJtQv7MKJO7DsAcCD0AiBz0DUzGedJA5JJP4iXH9ARqweOQE1AQcKahyEFcDuEZuQPX3RGIHPQZCN0BiBz0HQjdAkQOtgEI3QBEDrYFCL0GiBxsExD6BiBysG1A6CtA5GAbgdAXECJ/TRA52EKQGafhaqmpfE0I9IGg4pkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSHL6gUrwOKgNwXdZiunx/oHo0fm6zFdSD2VK59eE/XxUmmx9vu0ZgKmon/G1NTntFH8btOsp27B/w7vaUf9Bfh8c5RUe34uWjDDyvGImcbTkhBnqgLskfHNKD/ENNQ7KG0fEVepGux7Z/iNS3+S5cUGWXhntGNOtYdHTa9MfxF7Kugy+JnekMd4vF3PtCpuI6Tpc9+oytxfUvyoeoYSd2bgr6Ka/eHuHYz16+LTudCnMtR3b7F9Xuptvui7k16BnRW/ES/umyq2vG+OPeCXlnbMYtrMlBt+NL3Gq3tKuRaFKo93z7ep4L+FL/z2mcXzhZdnKC8GG/F/8obe6BPwAW5rfyufL0WDVIyESf9qfiFphSDvUcrfiCEMBLv76k5Z+I3/xrtHBuiG+ZV/QaioRbeLn2p/ivvjeSZ6jBkA3ovRPrJ+m0W51R3TF74f//zCuMH/dO2ibbcr8X5nZFrO5bnX3Wix/oaTYTgz4ME3+RazO8TKz3Kzuc9fRdt1OE8BrYN1NhXWotCNbIhUZRx8EjuT/ZuTceb6sYVwrt44n8Uj4+xxv2NeSY62TyCkR35RN2bL7phbQlq2CM9IlaGocl9Hcn9CF28a619VJ3Pe3EeX9XvsmAUutjBa7kjonQ3vIkbpJDDiGUBDKM1ULnf5/SRWoY/Ky/ljHJSKA/hyqURdR1trL5GEPgqZ8LLkkI7ovY4kL9L/j6T0awVurrBrFzgdD1WEcEtLjY0xCJi42Q6Fhcxr8gWD3+hBNee2GQj6rFlV+deGas0Yqws69c224jmSA7t6jyMjULXIh9TathhHGj6+uc1az5nGDkE9ba1kJaIAGQb49bTnSGMB0J8r/SQM8e5v2vd+ynUZO3Fpo/WhJ5R5LPGE10DMbSoY1+5u7E4UILLjG44Q2ob2YDkEKlHaC9kQjmR3k/7Q53hJu9iadZdXRx/kVfhMxJjbVbx3TlykuzftDhLv0hDt11b2GHtBnKG/0LMHseLgcqx/1h0TmPKgPp98TpceQ3Ww5qFGt8NycXiDdSE54TCmDhsc2w4j83nv4oOF+q24dMx3yrvkkU73hOv7+Lv5+JcZEx9INowq3MbOu2pGur8EWTEZBivTheFOp8jR+9OdjZLkafV8JrrxbnVbvelyw/SkxX/WbpgBX2gJuxZRSDDUbJns23njhgri5s4TR1ys4bSvHdIt+KcT2s//qKSjd5a9jGkQESo7tS2jQ7fHtQc23j+a+yrKFHpsKWMjb+x3E/52QfVecg2NxDDARsFXYjtX3hPNAuR266VmpgtrBGYA3k9F3/Xo+uuXA6Xi1OopIEXYidnrg1eBvfF64NKoLijQ3FxP/gG/BdRF93lgpPTNr6kH6/uid4447hceSncsOPtCCpS5HLtWLXHF85tWIi2+K8Q2YMSos1LTDbUU4lSAzqxnkOx3PafxugPDmNapnMh0JMmITF1wX5pOEO552hdxA2PPmNcTXgkG4epHnuQpIMycx8lyahVlAF4cGhbsh0HtkEltEJl/NnEPkwVrVBG0tYxr3hgSujaHSgtXzzPNT614hNuShOaOlMz/pHRnso7agFr5130IN/7uZplL43bRGjHWmgn9g2TTsxNyXzscvHPgf6v2YJUM+Rj6gBOndIyaXrWgXLhS4rJfrZQ0BoOSR9/Udexe6XTWO1Yufyi07Bsls6qV0MOY+e7OMQcWGevK9wnQlIT5tamCA1FHYc5z5Gk4odV6BfUYQw5FU/cRW7HcrjD1mFsurAkO8wVaAZivHtk2VnzeHckHDuldcTERKIJtGGMjKjAsGY0rNl3sjHf0R/UbWyCmjROt15Bh27NSV9FwvmWwtymF3/v4HFFTD1Oy/6yYA6pmXq3eagtBY2y5gJivlFRnYw9HPUptkiiM1A5G/UU8ZdHK6pJTGPbS5FVqYcEJqEvndO+TmoxkeYCeWINqcmZUFY5zXWfyyy6McVHuvAybvoyKDmnKphRUkqq6MPNhn+vioaYvyvX5Y+pw2hvzeyZfk/jkch7rpf2Dms32kuQpcdqrsrEUvhaTsaZb/R9R3ryZ0bXbKrj8lPDNgcJF2cchYTcVMw3Vyit0OvVF1/2ib+pEEh35mfqeG7tKNNWiZEFIUxE7sid2g0vd2wyM640be9VcURa3f3AH2Ur2cMqEWIzhY4By1nQwpgWK8U4pTR4FarQKa7djV1LS/6TQwipCzyodGsTaUODMnXWfPwo80MLRTPGDptPF//Yp5jhnH2dnhfGIdXcEGNIjVXJIjWPIEUm3Ci5j7rfNFxNDYzMR536aG9YMVNcUyCX58pSUd/pTefH53Zm1CYF/cNpO1aTu3XzNXJoUqqqPvb9rE2gNy4OmQXTKrVipXeTGUOmzqaaBZ1SCp4KVRgtoV4hWBo2MXVW+WBVOmkoOtrTFLX+MmItMdUJKmM2oqYU6xbfWkqqbfS4un6iZTXsc2+d9DhOmqtuKVShvBOT68VqFWCX8s7lCq4Ltba7qwysHtS/KCX2bLycyUaTTfX+pNBt2TUltQkbe7i12Kj+e2r4TrNQmwzT2JMkNobcnKrFFGqByYy6x/uWSybV890q9JJSYg/tpZ0jmFPlO2zM1htYs2v2ks1UW7GG1Ooq1DxYLGK1Vj3MqsvrZV89tDlrzlYtplpRZU7ACONWTVSuvqqQz5TcJqvk2vVW8vBt6M7dHMtOWQ7rwZp0dk2pkSK/VyHe2aaP93W96rJ2B5XQJtQG5gSZ69pJtR/i3wfGca4UoqwWGyQqGcoTrqwUiqnhq6w5IVw1s67H5cParasbNaYUVOu5x8ZNKiHYylalnsxsgjmWXX02pcjodfSlcaP7xEKvlo6fmiaBB6vxtg0MW3Pfl8s4r1LqksRrL1mZk+yMqAFawFPLZrKO2JFTtZj7wISbSCjx3tMLImujPKYuYmvHTbw483FHli2mye+r8GBtx9h3iAHKhARpuewxVTkRtl9bCkfuw3mM57BK7cCW62uhuXW6E9dkXz05o6zd5kGEqGyxDQ58GEBkVJbXZ+GpDAwLWNovVLkZ2fbMSUsH+vNoT99xLIAyIXfmZdlWGZq/poaJh6YN9h1iz/OZ5Fe28aNurLONu/jNs1fLUeK4YQKNEsYXlTl2ZThGadpHl5YAK36IhmaOxbjFhDMj255oY1MyiyLa03ecyn1VwzGbx7zI5aZSUuoBKub6iKWtnuFAn5BLOGeSotjCJpzGPXEYNnXn9Lrk0HDYrXTZqUvsd9Riu2BfHz6v51ZSU54JD9XWRgvlts+oKXcO5asK8+KqSuj2FTjzrS+ylLPlCEkDrkRY1abLEoVMuJx1LuvMfu3/po6iLfXUspmyxKGz8NIw6Oy1kXnD+lCXL7qN2PdlqI8w0Du6dbZKVTnbm1QJFB6FH+MQa5LmzqFg3zKTRKG0YNQ9tS+WSB8qakLhMAafP26qenZaSY7oJb1yondk3bgQrnTETtxx8re2PsLjNJH078VGMuRknzCrXJaJLhM8VScgs39WV7o9VwJaLvNsY8+SNeZbD76qXW4ackR5AqseI9pCbhXV2C1Kb9+Ux8cHD9RiCZeh2ZQ6jA59SrG7xPzls9OO1di+5um+C48Jlx3gkNxI04lLF756vJTJMEkX/nK1k9lf2dGJw46eeMrNHamZ+2crnzN5seHJqKvHG4dcQOtkRvUE1kZCl8heV8xjHDlYxbwLRQr1kEHz3XC5Vx2qNmRC3YfKaA3tG+s2XNBIPdK7MiYzqhKEDrznihJ24o7GZJ6stTT3M1jdkVN1y1TsWep+hZczslXJiVfE74ewEqYUVhlK6+sCkaLbBSiWqIZS/sOM4rFc2VGgyF+m7MSdXfiVifO1QIrqsR+8x5txMIfUwmt+3alYpnXWkiKgExdON37YtVCaH9OuzSmYUPfhTlm1PHMKGUT+iMss/GD5QSMbI6bK4tzRC8q3uOJaFak054EHNzI92Wj7frQMQO3erk8KdS2U5ko1g3xKPUPed/k0luSrAWUK6n3AI5hCD+c2C3+wmEA0MO1MNNhDp9hkOGqxhboZpjXnccaGdnc5YgHJNRerI9lv3mRuxClQ4U/5KKX4hkta1Tf66UVZPWBHF/5sPiS1rkdXrqZ8XtpDVLdtqjoQsV81229/MuqYGqI7CrMbF7ss9JOLNe2hyy7v0cs2GnEK5KOUlOGKI/jbx/b7c4vlwFxceP2sQKcKM7o3H4kvjNWy1T0xo+n6uN0npnrhwfrTSC0hNbF9nE6GxaRcYQwfRi0LrWZJv4j5jq4U2DRT5VlXhQ4vix7Mroegnp1WZXmOdDv2yfacKg/nuyp/3Xrn5zQLr58VWFADVCGCHyr5QIrnYKk2FtPf9PS86ZnpwhhnvAdinPVTnAmVx5ixCSlKUxrovfotM0qItcjmhkKawVED3QmF/CZ1/x9qOnvP+5arDdQeWxaPeKB/ijb8VI1GtuEB3Yh//9NavNTnWHUEti2Xe/9/OtFB7574dvcAAAAASUVORK5CYII="
          className={styles.logoF}
        />
      </div>
      <div className={styles.part2} >
        <ul>
          <li>
            <Link className={styles.text_white} href="/about" >
              ABOUT
            </Link>
          </li>
          <li>
            <Link className={styles.text_white} href="/event" >
              EVENTS
            </Link>
          </li>
          <li>
            <Link className={styles.text_white} href="/contact" >
              CONTACT
            </Link>
          </li>
          <li>
            <Link className={styles.text_white} href="/contact" >
              INITIATORS
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.part3}>
        <ul>
          <li>
            <Link
              className={styles.text_white}
              href="/practicepaper"
              
            >
              RESOURCES
            </Link>
          </li>
          <li >
            <Link
              className={styles.text_white}
              href="https://drive.google.com/uc?export=download&amp;id=1AFJ0bd3fW0ANG3rV_hihGoT_1A9nftRG"
              
            >
              SYLLABUS
            </Link>
          </li>
          <li >
            <Link
              className={styles.text_white}
              href="/practicepaper"
              
            >
              PRACTICE PAPERS
            </Link>
          </li>
          <li >
            <Link
              className={styles.text_white}
              href="https://drive.google.com/uc?export=download&amp;id=1sl2RQLRUzK4cqxpXqK6veCmgSF3muYew"
              
            >
              BROCHURE
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.part4}>
        <div className={styles.follow}>
          <div>
            <h5 style={{ color: 'white' }}>FOLLOW US</h5>
          </div>
          <div>
            <ul>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100094215150920&amp;mibextid=ZbWKwL"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                    className="f-icons"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'white' }}
                  >
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://instagram.com/gambitor.iitr?utm_source=qr&amp;igshid=ZDc4ODBmNjlmNQ%3D%3D"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="f-icons"
                    color="white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'white' }}
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/gambitor-iit-roorkee/"
                  target="_blank"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="f-icons"
                    color="white"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ color: 'white' }}
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
            <Image src={footerImg} alt="Footer Image"></Image>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
