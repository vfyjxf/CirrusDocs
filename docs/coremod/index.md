# CoreMod

CoreMod 这个术语的确切来源已不可考，但按笔者理解：**那些在 Mod 加载非常早期阶段介入、并且拥有修改类字节码能力（Class Transform）的 Mod，统称为 CoreMod。** 

它们不同于普通 Mod 通过事件或 API 做上层扩展，而是直接操作 Minecraft 的类文件本身——修改方法体、替换字段访问、注入新逻辑。正因为如此，CoreMod 的实现方式随 Minecraft 版本和模组平台的不同而变化极大。

## 版本与平台总览

CoreMod 的底层机制由版本决定，同一个版本区间内不同平台（Forge / Fabric / NeoForge）又有各自的实现体系。下面按版本梳理：

| 版本区间 | 主流平台 | CoreMod 实现方式 |
|---|---|---|
| **1.7.10 ~ 1.12.2** | Forge | IFMLLoadingPlugin / ICoreMod, LaunchWrapper 体系 |
| **1.16.5** | Forge, Fabric | Forge: FML 2.0 体系; Fabric: Mixin + Access Wideners |
| **1.18 ~ 1.20.1** | Forge, Fabric | 基本同 1.16.5，Forge 逐步转向 Mixin 为主 |
| **1.20.6 ~ 1.21.8** | NeoForge, Fabric | NeoForge 继承 Forge 体系; Fabric 成熟 Mixin 生态 | NeoForge 继承 Forge 体系; Fabric 成熟 Mixin 生态 |
| **1.21.9+** | NeoForge, Fabric | 新版 NeoForge 加载器变化，需关注兼容性 |

## 内容结构

### Mixin（通用技术）

Mixin 是当今 Minecraft Mod 开发中最核心的类注入框架，**跨版本、跨平台通用**。无论你写 Forge、NeoForge 还是 Fabric，Mixin 都是必备技能。

- [Mixin 入门](./mixin-basics) — 注解体系、Injection Point、配置与冲突解决
- [ASM 字节码操作](./asm-bytecode) — ClassVisitor / MethodVisitor 原理与实战
- [调试与排错](./debugging) — Stacktrace 分析、Mixin 冲突定位、IDE 调试技巧

### 各版本 CoreMod 体系

- [1.7.10 ~ 1.12.2](./legacy-coremod) — LaunchWrapper、IFMLLoadingPlugin、Access Transformer 等早期体系
- [1.16.5](./1.16.5) — FML 2.0 + Fabric 双平台 CoreMod 方案
- [1.18 ~ 1.20.1](./1.18-1.20.1) — 过渡期，Mixin 逐渐成为主流
- [1.20.6 ~ 1.21.8](./1.20.6-1.21.8) — NeoForge 崛起，Forge/Fabric 三足鼎立
- [1.21.9+](./1.21.9) — 新版 NeoForge 加载器变更

---

::: tip 阅读建议
如果你是 CoreMod 新手，建议直接从 **Mixin 入门** 开始——它是当前所有平台和版本的通用基础设施。之后再根据需要查阅对应版本的 CoreMod 机制。
:::
