<!--
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-29 10:34:44
 * @LastEditTime: 2023-05-29 14:09:40
-->
<template>
  <div>
    <div class="container">
      <div class="logos">
        <div class="logos-wrap logos-1">
          <div class="box-1 box">
            <template v-for="item in fRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
          <div class="box-2 box">
            <template v-for="item in sRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
          <div class="box-3 box">
            <template v-for="item in tRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
        </div>
        <div class="logos-wrap logos-2">
          <div class="box-1 box">
            <template v-for="item in fRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
          <div class="box-2 box">
            <template v-for="item in sRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
          <div class="box-3 box">
            <template v-for="item in tRowImg" :key="item">
              <img :src="item" alt="" class="logoShow" />
            </template>
          </div>
        </div>
      </div>
      <div class="shenzhi-logo">
        <img :src="midData.img" alt="" />
        <span class="label">{{ midData.label }}</span>
      </div>
      <div class="account">
        <svg
          width="110"
          height="213"
          viewBox="0 0 110 213"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="110" height="44" rx="4" fill="#7A78EE" />
          <path
            d="M24 12C18.579 12 14 16.579 14 22C14 27.421 18.579 32 24 32C29.421 32 34 27.421 34 22C34 16.579 29.421 12 24 12ZM24 17C25.727 17 27 18.272 27 20C27 21.728 25.727 23 24 23C22.274 23 21 21.728 21 20C21 18.272 22.274 17 24 17ZM18.894 26.772C19.791 25.452 21.287 24.572 23 24.572H25C26.714 24.572 28.209 25.452 29.106 26.772C27.828 28.14 26.015 29 24 29C21.985 29 20.172 28.14 18.894 26.772Z"
            fill="white"
          />
          <text x="40" y="25" fill="white">{{ labelText.top }}</text>
          <rect y="85" width="110" height="44" rx="4" fill="#484F65" />
          <path
            d="M24 97C18.579 97 14 101.579 14 107C14 112.421 18.579 117 24 117C29.421 117 34 112.421 34 107C34 101.579 29.421 97 24 97ZM24 102C25.727 102 27 103.272 27 105C27 106.728 25.727 108 24 108C22.274 108 21 106.728 21 105C21 103.272 22.274 102 24 102ZM18.894 111.772C19.791 110.452 21.287 109.572 23 109.572H25C26.714 109.572 28.209 110.452 29.106 111.772C27.828 113.14 26.015 114 24 114C21.985 114 20.172 113.14 18.894 111.772Z"
            fill="white"
          />
          <text x="40" y="112" fill="white">{{ labelText.mid }}</text>
          <rect y="169" width="110" height="44" rx="4" fill="#F88787" />
          <path
            d="M24 181C18.579 181 14 185.579 14 191C14 196.421 18.579 201 24 201C29.421 201 34 196.421 34 191C34 185.579 29.421 181 24 181ZM24 186C25.727 186 27 187.272 27 189C27 190.728 25.727 192 24 192C22.274 192 21 190.728 21 189C21 187.272 22.274 186 24 186ZM18.894 195.772C19.791 194.452 21.287 193.572 23 193.572H25C26.714 193.572 28.209 194.452 29.106 195.772C27.828 197.14 26.015 198 24 198C21.985 198 20.172 197.14 18.894 195.772Z"
            fill="white"
          />
          <text x="40" y="195" fill="white">{{ labelText.bottom }}</text>
        </svg>
      </div>
      <div class="lines">
        <div class="line-1">
          <svg
            width="481"
            height="235"
            viewBox="0 0 481 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M0 93H26.9475C34.3831 93 41.5536 90.2387 47.0687 85.2517L123.931 15.7483C129.446 10.7613 136.617 8 144.052 8H293.795C304.982 8 315.24 14.2247 320.406 24.1479L417.594 210.852C422.76 220.775 433.018 227 444.205 227H481"
              stroke="#8684FF"
              stroke-width="16"
            />
          </svg>
          <svg
            id="line-1"
            width="481"
            height="235"
            viewBox="0 0 481 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="1"
              d="M0 93H26.9475C34.3831 93 41.5536 90.2387 47.0687 85.2517L123.931 15.7483C129.446 10.7613 136.617 8 144.052 8H293.795C304.982 8 315.24 14.2247 320.406 24.1479L417.594 210.852C422.76 220.775 433.018 227 444.205 227H481"
              stroke="#8684FF"
              stroke-width="16"
            />
          </svg>
          <svg
            width="260"
            height="55"
            viewBox="0 0 260 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M0 8H79.4107C81.9382 8 84.4511 8.38328 86.8636 9.13676L203.729 45.6359C206.624 46.5401 209.64 47 212.673 47H259.5"
              stroke="#8684FF"
              stroke-width="16"
            />
          </svg>
        </div>
        <div class="line-2">
          <svg
            width="482"
            height="151"
            viewBox="0 0 482 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M0 142.5H301.522C310.383 142.5 318.791 138.582 324.491 131.798L419.509 18.7022C425.209 11.9176 433.617 8 442.478 8H482"
              stroke="#323232"
              stroke-width="16"
            />
          </svg>
          <svg
            id="line-2"
            width="482"
            height="151"
            viewBox="0 0 482 151"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.6"
              d="M0 142.5H301.522C310.383 142.5 318.791 138.582 324.491 131.798L419.509 18.7022C425.209 11.9176 433.617 8 442.478 8H482"
              stroke="#323232"
              stroke-width="16"
            />
          </svg>
        </div>
        <div class="line-3">
          <svg
            width="480"
            height="144"
            viewBox="0 0 480 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M0 53.5H36.5736C44.5301 53.5 52.1607 56.6607 57.7868 62.2868L122.213 126.713C127.839 132.339 135.47 135.5 143.426 135.5H303.596C312.415 135.5 320.787 131.62 326.487 124.89L416.513 18.6096C422.213 11.8804 430.585 8 439.404 8H480"
              stroke="#FF0000"
              stroke-width="16"
            />
          </svg>
          <svg
            id="line-3"
            width="480"
            height="144"
            viewBox="0 0 480 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M0 53.5H36.5736C44.5301 53.5 52.1607 56.6607 57.7868 62.2868L122.213 126.713C127.839 132.339 135.47 135.5 143.426 135.5H303.596C312.415 135.5 320.787 131.62 326.487 124.89L416.513 18.6096C422.213 11.8804 430.585 8 439.404 8H480"
              stroke="#FF0000"
              stroke-width="16"
            />
          </svg>
          <svg
            width="254"
            height="56"
            viewBox="0 0 254 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M0.5 48.0001H79.6109C82.3346 48.0001 85.04 47.555 87.6201 46.6824L197.325 9.5812C200.421 8.53411 203.667 8 206.936 8H253.403"
              stroke="#FF0000"
              stroke-width="16"
            />
          </svg>
        </div>
      </div>
      <div class="results">
        <div class="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <path
                d="M17.21 9.00002L12.83 2.44002C12.64 2.16002 12.32 2.02002 12 2.02002C11.68 2.02002 11.36 2.16002 11.17 2.45002L6.79 9.00002H2C1.45 9.00002 1 9.45002 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45002 22.55 9.00002 22 9.00002H17.21ZM9 9.00002L12 4.60002L15 9.00002H9ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17Z"
                fill="black"
              />
            </g>
          </svg>
          <span class="label">{{ resultLabel.fi }}</span>
        </div>
        <div class="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <path
                d="M20 12C20 10.9 20.9 10 22 10V6C22 4.9 21.1 4 20 4H4C2.9 4 2.01 4.9 2.01 6V10C3.11 10 4 10.9 4 12C4 13.1 3.11 14 2 14V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V14C20.9 14 20 13.1 20 12ZM15.58 16.8L12 14.5L8.42 16.8L9.5 12.68L6.21 9.99L10.45 9.74L12 5.8L13.54 9.75L17.78 10L14.49 12.69L15.58 16.8Z"
                fill="black"
              />
            </g>
          </svg>
          <span class="label">{{ resultLabel.se }}</span>
        </div>
        <div class="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.6">
              <path
                d="M3.5 18.99L14.5 19C15.17 19 15.77 18.67 16.13 18.16L20.5 12L16.13 5.84C15.77 5.33 15.17 5 14.5 5L3.5 5.01L8.34 12L3.5 18.99Z"
                fill="black"
              />
            </g>
          </svg>
          <span class="label">{{ resultLabel.th }}</span>
        </div>
        <div class="icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.7">
              <path
                d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                fill="black"
              />
            </g>
          </svg>
          <span class="label">{{ resultLabel.fo }}</span>
        </div>
      </div>
      <div class="rule">
        <div>
          <span class="rule-1 rulenode">
            {{ ruleLabel.middle }}
          </span>
        </div>
        <div>
          <span class="rule-2 rulenode">
            {{ ruleLabel.bottom }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  fRowImg: string[]
  sRowImg: string[]
  tRowImg: string[]
  midData: {
    img: string
    label: string
  }
  labelText: {
    top: string
    mid: string
    bottom: string
  }
  ruleLabel: {
    bottom: string
    middle: string
  }
  resultLabel: { fi: string; se: string; th: string; fo: string }
}>()
const logosWrap = document.querySelectorAll('.logos-wrap')
const targets: any = []

logosWrap.forEach((item) => {
  targets.push(item.querySelectorAll('img'))
  return targets
})

const options = {
  root: document.querySelector('.logos'),
  rootMargin: '0px',
  threshold: 1
}

const observerImg = () => {
  const callback = (e: any) => {
    e.forEach((i: any) => {
      if (i.intersectionRatio <= 0) {
        i.target.classList.remove('logoShow')
      }
      if (i.isIntersecting) {
        i.target.classList.add('logoShow')
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)

  targets.forEach((item: any) => {
    item.forEach((i: number) => {
      observer.observe(i as any)
    })
  })
}

window.onload = observerImg
</script>

<style scoped lang="scss">
.container {
  z-index: 0;
  position: relative;
  display: flex;
  align-items: center;
  width: 1080px;
  height: 400px;
  overflow: hidden;
  background: url('https://i.loli.net/2020/05/13/OJYTLba8CQweWIq.png') no-repeat;
  background-size: cover;

  .logos {
    display: flex;
    align-items: center;
    width: 400px;
    height: 320px;
    overflow: hidden;
    border-radius: 0 200px 200px 0;
    background: radial-gradient(
      166.55% 283.86% at -39.88% 50%,
      rgba(255, 255, 255, 0) 65.64%,
      hsla(184, 100%, 50%, 0.48) 99%
    );

    .logos-wrap {
      img {
        height: 40px;
      }
      .box {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 30px;

        &:last-child {
          margin: unset;
        }
      }
    }
  }

  .shenzhi-logo {
    position: relative;
    left: -60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 100px;
    box-shadow: 0px 0px 40px rgba(164, 168, 197, 0.24);
    background-color: white;

    img {
      z-index: 99;
      width: 30px;
    }
    .label {
      color: #000;
      z-index: 99;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  .account {
    position: relative;
    left: 90px;
  }
  .lines {
    position: absolute;
    width: 482px;
    height: 100%;
    z-index: -1;
    left: 423px;
    top: 107px;

    .line-1 {
      svg {
        position: absolute;

        &:nth-of-type(3) {
          position: absolute;
          right: 0;
          top: 1px;
        }
      }
    }

    .line-2 {
      svg {
        position: absolute;
      }
      position: absolute;
      top: -49px;
    }
    .line-3 {
      position: absolute;
      top: 40px;

      svg {
        position: absolute;
        &:nth-of-type(3) {
          position: relative;
          right: -89%;
          top: 87px;
        }
      }
    }
  }
}

.results {
  position: absolute;
  right: 150px;
  z-index: 99;
  .icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 52px;
    height: 52px;
    background: #ffffff;
    box-shadow: 0px 8px 40px rgba(164, 168, 197, 0.4);
    border-radius: 59px;
    margin-bottom: 38px;
    .label {
      position: absolute;
      z-index: 11;
      right: -60px;
      top: 16px;
      color: #000;
      font-weight: 600;
    }
    &:last-child {
      margin-bottom: unset;
    }
  }
}

#line-1 {
  stroke-dasharray: 60, 600;
  stroke-dashoffset: 24;
  animation: line1 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite;

  @keyframes line1 {
    to {
      stroke-dashoffset: -620;
    }
  }
}
#line-2 {
  stroke-dasharray: 60, 600;
  stroke-dashoffset: 24;
  animation: line2 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite 0.6s;

  @keyframes line2 {
    to {
      stroke-dashoffset: -620;
    }
  }
}
#line-3 {
  stroke-dasharray: 60, 600;
  stroke-dashoffset: 24;
  animation: line3 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite 0.2s;

  @keyframes line3 {
    to {
      stroke-dashoffset: -620;
    }
  }
}

.container .shenzhi-logo {
  $shadowColor: hsla(192, 76%, 59%, 0.58);
  animation: ripple 0.8s linear infinite;

  @keyframes ripple {
    0% {
      box-shadow: 0 0 0 0 rgba($shadowColor, 0), 0 0 0 40px rgba($shadowColor, 0.18);
    }
    100% {
      box-shadow: 0 0 0 40px rgba($shadowColor, 0.18), 0 0 0 60px rgba($shadowColor, 0);
    }
  }

  @keyframes scale {
    50% {
      transform: scale(1.15);
    }
    0%,
    100% {
      transform: scale(1);
    }
  }

  &::after {
    z-index: 0;
    border-radius: 100%;
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 40px rgba(164, 168, 197, 0.24);
    background-color: white;
    transform: scale(1);
    animation: scale 2.5s linear infinite;
  }
}

.logos-1 {
  transition: all 0.2s ease;
  position: relative;
  margin-right: 20px;
  will-change: transform;
  animation: logosMoving 10s linear infinite both 1s;

  @keyframes logosMoving {
    to {
      transform: translateX(105%);
    }
  }
}

.logos-2 {
  transition: all 0.2s ease;
  will-change: transform;
  animation: logosMoving 10s linear infinite both 1s;
}

.logos-wrap {
  position: relative;
  left: -100%;
}

.logoShow {
  animation: logoShow 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 0.2s;

  @keyframes logoShow {
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
      filter: blur(0);
    }
  }
}

.logos-wrap img {
  opacity: 0;
  transform: scale3d(0, 0, 0);
  filter: blur(20px);
  transition: all 0.3s ease-out;
  margin: 4px 14px;
  will-change: transform;
}

.rule {
  position: absolute;
  z-index: 99;
  right: 180px;

  .rulenode {
    z-index: 99;
    display: inline-block;
    width: 94px;
    // height: 51px;
    top: 4px;
    right: -67px;
    text-align: center;
  }

  div {
    &:nth-of-type(1) {
      position: relative;
      right: 100px;
      top: -40px;

      &::after {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow3 4s cubic-bezier(0.5, 1, 0.89, 1) infinite;

        @keyframes popShow3 {
          80% {
            opacity: 0;
            transform: scale(0);
          }
          91% {
            opacity: 0.3;
          }
          100% {
            opacity: 0;
            transform: scale(2.4);
          }
        }
      }

      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        // right: 50px;
        transform: scale(0);
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.2s;

        @keyframes popShow {
          80% {
            opacity: 0;
            transform: scale(0);
          }
          91% {
            opacity: 0.5;
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      }
    }

    &:nth-of-type(2) {
      position: relative;
      right: 125px;
      top: -90px;

      &::after {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #2e2e2e 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow2 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.35s;

        @keyframes popShow2 {
          80% {
            opacity: 0;
            transform: scale(0);
          }
          91% {
            opacity: 0.1;
          }
          100% {
            opacity: 0;
            transform: scale(2.4);
          }
        }
      }

      &::before {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #2e2e2e 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.6s;

        @keyframes popShow {
          80% {
            opacity: 0;
            transform: scale(0);
          }
          91% {
            opacity: 0.4;
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      }
    }
  }
}

.rule-2 {
  position: absolute;
  background-color: #484f65;
  border-radius: 8px;
  color: #fff;
}

.rule-1 {
  position: absolute;
  background-color: #f88788;
  border-radius: 8px;
  color: #fff;
}

.box-1,
.box-3 {
  left: -20%;
  position: relative;
}

.dr {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 100px;
}
</style>
