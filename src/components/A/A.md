# A 链接组件

A组件是一个功能增强的链接组件，支持普通链接、电话链接、邮件链接等多种类型，并可以添加图标。

## 基本用法

### 普通链接

```vue
<A href="https://example.com">普通链接</A>
```

### 新窗口打开链接

```vue
<A href="https://example.com" target="_blank">新窗口打开</A>
```

### 禁用状态

```vue
<A href="https://example.com" :disabled="true">禁用链接</A>
```

### 电话链接

```vue
<A type="phone" href="12345678910">拨打电话</A>
```

### 邮件链接

```vue
<A type="email" href="example@example.com">发送邮件</A>
```

### 自定义图标

```vue
<A href="https://example.com" icon="link">带图标的链接</A>
```

## API

### 属性

| 属性名   | 说明                       | 类型                         | 默认值   |
| -------- | -------------------------- | ---------------------------- | -------- |
| href     | 链接地址                   | string                       | '#'      |
| target   | 打开链接的位置             | '\_self' \| '\_blank'        | '\_self' |
| type     | 链接类型                   | 'link' \| 'phone' \| 'email' | 'link'   |
| disabled | 是否禁用                   | boolean                      | false    |
| icon     | 图标名称或是否显示默认图标 | string \| false              | -        |

### 事件

| 事件名 | 说明           | 回调参数                    |
| ------ | -------------- | --------------------------- |
| click  | 点击链接时触发 | (event: MouseEvent) => void |

### 插槽

| 插槽名  | 说明     |
| ------- | -------- |
| default | 链接内容 |

### 注意事项

1. 当 `type="phone"` 时，点击链接会自动调用设备的拨号功能
2. 当 `type="email"` 时，点击链接会自动打开邮件客户端
3. 当 `target="_blank"` 时，为安全起见，会自动添加 `rel="noopener noreferrer"` 属性
4. 禁用状态下点击链接不会触发任何事件
