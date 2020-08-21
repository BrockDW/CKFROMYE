<template>
  <el-row :gutter="10">
    <el-col :span="15">
      <div class="grid-content" style="text-align:center">
        <el-row :gutter="10" style="margin-top: 60px">
          <el-col :span="8">
            <div class="grid-content">
              <el-button type="primary" @click="handleButton_root_1()">坚持</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-button type="primary" @click="handleButton_root_2()">习惯</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-button type="primary" @click="handleButton_root_3()">优秀</el-button>
            </div>
          </el-col>
        </el-row>
        <transition>
          <div v-show="show">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M150,0 C150,150 120,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M150,0 C150,150 330,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M150,0 C150,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M150,0 C150,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_111()">心理学</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_112()">认知</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_113()">经验</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_114()">方法</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show2">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M465,0 C460,150 120,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M465,0 C460,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M465,0 C460,150 580,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M465,0 C460,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_121()">勤奋</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_122()">努力</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_123()">心得</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_124()">体会</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show3">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M780,0 C780,150 120,80 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M780,0 C780,150 345,100 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M780,0 C780,150 580,100 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M780,0 C780,150 800,100 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_131()">心理学</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_132()">认知</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_133()">经验</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="handleButton_134()">方法</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>

        <transition>
          <div v-show="show111">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path d="M110,0 110,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 330,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary" @click="$router.push('/readingList')">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">谁的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show112">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M345,0 C345,150 120,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M345,0 345,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show113">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M580,0 C580,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M580,0 580,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 820,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show114">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M820,0 C820,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 580,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M820,0 820,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>

        <transition>
          <div v-show="show121">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path d="M110,0 110,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 330,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">谁的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show122">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M345,0 C345,150 120,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M345,0 345,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show123">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M580,0 C580,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M580,0 580,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 820,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show124">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M820,0 C820,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 580,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M820,0 820,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>

        <transition>
          <div v-show="show131">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path d="M110,0 110,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 330,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M110,0 C150,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">谁的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show132">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M345,0 C345,150 120,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M345,0 345,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 550,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M345,0 C345,150 800,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show133">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M580,0 C580,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M580,0 580,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                    <g>
                      <path
                        d="M580,0 C580,150 820,50 820,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
        <transition>
          <div v-show="show134">
            <el-row>
              <el-col :span="24">
                <div class="grid-content" style="height:180px">
                  <svg
                    style="width:100%"
                    height="180"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                  >
                    <g>
                      <path
                        d="M820,0 C820,150 110,50 110,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 345,50 345,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M820,0 C820,150 580,50 580,180"
                        fill="none"
                        stroke="black"
                        stroke-width="0.3"
                      />
                    </g>
                    <g>
                      <path d="M820,0 820,180" fill="none" stroke="black" stroke-width="0.3" />
                    </g>
                  </svg>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="10">
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">我的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">你的</el-button>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="grid-content">
                  <el-button type="primary">他的</el-button>
                </div>
              </el-col>
            </el-row>
          </div>
        </transition>
      </div>
    </el-col>
    <el-col :span="9">
      <div class="grid-content">
        <note></note>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import note from "./note.vue";

export default {
  components: {
    note: note
  },
  name: "learnSeriously",
  data() {
    return {
      activeIndex: "/learnSeriously",
      textarea: "",

      show: false,
      show2: false,
      show3: false,

      show111: false,
      show112: false,
      show113: false,
      show114: false,

      show121: false,
      show122: false,
      show123: false,
      show124: false,

      show131: false,
      show132: false,
      show133: false,
      show134: false
    };
  },
  computed: {
    noMore() {
      return this.count >= 10;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },

  methods: {
    handleButton_root_1() {
      this.show = !this.show;

      this.show2 = false;
      this.show3 = false;

      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },

    handleButton_root_2() {
      this.show2 = !this.show2;

      this.show = false;
      this.show3 = false;

      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },

    handleButton_root_3() {
      this.show3 = !this.show3;

      this.show = false;
      this.show2 = false;

      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },

    handleButton_111() {
      this.show111 = !this.show111;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_112() {
      this.show111 = false;
      this.show112 = !this.show112;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_113() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = !this.show113;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_114() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = !this.show114;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },

    handleButton_121() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = !this.show121;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_122() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = !this.show122;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_123() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = !this.show123;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_124() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = !this.show124;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },

    handleButton_131() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = !this.show131;
      this.show132 = false;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_132() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = !this.show132;
      this.show133 = false;
      this.show134 = false;
    },
    handleButton_133() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = !this.show133;
      this.show134 = false;
    },
    handleButton_134() {
      this.show111 = false;
      this.show112 = false;
      this.show113 = false;
      this.show114 = false;

      this.show121 = false;
      this.show122 = false;
      this.show123 = false;
      this.show124 = false;

      this.show131 = false;
      this.show132 = false;
      this.show133 = false;
      this.show134 = !this.show134;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.text {
  font-size: 14px;
  font-family: "pingfang";
}

.item {
  margin-bottom: 18px;
  font-size: 1.1em;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: calc(100% - 2px);
  margin-bottom: 12px;
}

.te >>> textarea {
  font-family: "pingfang";
  font-size: 1.5em;
}

.te >>> textarea::-webkit-input-placeholder {
  color: #cdcdcd;
}

.scrollbar >>> .el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-button {
  color: #414141;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  font-family: "pingfang";
}
</style>