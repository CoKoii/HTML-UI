<script setup lang="ts">
// 提供了点击区域的数据
const areas = [
  { shape: 'rect', coords: '0,0,100,100', href: '#rectangle', alt: '矩形区域' },
  { shape: 'circle', coords: '200,75,50', href: '#circle', alt: '圆形区域' },
  { shape: 'poly', coords: '300,50,350,120,250,120', href: '#triangle', alt: '多边形区域' },
]
</script>

<template>
  <div class="container">
    <h1>HTML &lt;area&gt; 元素用法示例</h1>

    <div class="section">
      <h2>1. 基本介绍</h2>
      <p>
        &lt;area&gt; 元素定义了图像映射中的一个区域，必须嵌套在 &lt;map&gt; 元素内部。
        图像映射允许在图像的特定区域上添加可点击的热点，每个热点可链接到不同的目标。
      </p>
    </div>

    <div class="section">
      <h2>2. 图像映射示例</h2>
      <div class="image-map-container">
        <img
          src="https://w.wallhaven.cc/full/2y/wallhaven-2yp6gg.png"
          alt="MDN Logo"
          usemap="#image-map"
        />

        <map name="image-map">
          <!-- 矩形区域 (x1,y1,x2,y2) -->
          <area
            shape="rect"
            coords="0,0,100,100"
            href="#rectangle"
            alt="矩形区域"
            title="这是一个矩形区域"
          />

          <!-- 圆形区域 (x,y,r) -->
          <area
            shape="circle"
            coords="200,75,50"
            href="#circle"
            alt="圆形区域"
            title="这是一个圆形区域"
          />

          <!-- 多边形区域 (x1,y1,x2,y2,...) -->
          <area
            shape="poly"
            coords="300,50,350,120,250,120"
            href="#triangle"
            alt="多边形区域"
            title="这是一个三角形区域"
          />
        </map>
      </div>
      <p class="hint">
        将鼠标悬停在图像的不同区域上，查看定义的热点（左侧矩形，中间圆形，右侧三角形）。
      </p>

      <!-- 动态生成区域 -->
      <div class="dynamic-example">
        <h3>动态生成的区域示例：</h3>
        <img
          src="https://w.wallhaven.cc/full/2y/wallhaven-2yp6gg.png"
          alt="动态区域示例"
          usemap="#dynamic-map"
        />

        <map name="dynamic-map">
          <area
            v-for="(area, index) in areas"
            :key="index"
            :shape="area.shape"
            :coords="area.coords"
            :href="area.href"
            :alt="area.alt"
            :title="area.alt"
          />
        </map>
      </div>
    </div>

    <div class="section">
      <h2>3. &lt;area&gt; 元素的所有属性</h2>
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>alt</td>
            <td>为区域提供替代文本，对于可访问性很重要</td>
          </tr>
          <tr>
            <td>coords</td>
            <td>指定区域的坐标，格式取决于shape属性</td>
          </tr>
          <tr>
            <td>download</td>
            <td>指定当用户点击超链接时，目标将被下载</td>
          </tr>
          <tr>
            <td>href</td>
            <td>指定区域的超链接目标URL</td>
          </tr>
          <tr>
            <td>hreflang</td>
            <td>指定链接文档的语言</td>
          </tr>
          <tr>
            <td>media</td>
            <td>指定链接文档针对的设备/媒体</td>
          </tr>
          <tr>
            <td>referrerpolicy</td>
            <td>指定在获取URL时使用的引用者信息</td>
          </tr>
          <tr>
            <td>rel</td>
            <td>指定当前文档与目标URL之间的关系</td>
          </tr>
          <tr>
            <td>shape</td>
            <td>指定区域的形状：rect(矩形)、circle(圆形)、poly(多边形)、default(整个区域)</td>
          </tr>
          <tr>
            <td>target</td>
            <td>指定打开链接的位置，如_blank, _self, _parent, _top或框架名</td>
          </tr>
          <tr>
            <td>type</td>
            <td>指定链接目标的媒体类型</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="section">
      <h2>4. 注意事项</h2>
      <ul>
        <li>&lt;area&gt; 必须在 &lt;map&gt; 元素内使用</li>
        <li>&lt;map&gt; 的 name 属性必须与 &lt;img&gt; 的 usemap 属性值匹配（带#前缀）</li>
        <li>coords 坐标以像素为单位，从图像左上角(0,0)开始计算</li>
        <li>为了可访问性，应始终提供 alt 属性</li>
        <li>现代网页设计中，图像映射使用相对较少，但在某些特定场景仍很有用</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.section {
  margin-bottom: 30px;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 5px;
}

.image-map-container {
  position: relative;
  margin: 20px 0;
}

img {
  max-width: 100%;
  border: 1px solid #ddd;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.hint {
  color: #666;
  font-style: italic;
}

h1 {
  color: #333;
}

h2 {
  color: #555;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

ul li {
  margin-bottom: 8px;
}
</style>
