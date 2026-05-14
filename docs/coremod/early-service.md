# Early Service

Early Service 是 ModLauncher 在 **SERVICE Layer** 中加载的一组特殊 SPI 服务。之所以称为 "Early"，是因为常规 Mod 使用的 Service 位于 PLUGIN Layer，加载时机较晚；而这组 Service 在更早的阶段即被加载，因此得名。

以下列表定义于 `net.neoforged.fml.loading.TransformerDiscovererConstants`（`ITransformerDiscoveryService` 的实现可引用该常量类），**仅供参考，取决于实际版本**：

| 全限定类名 | 用途 |
|---|---|
| `cpw.mods.modlauncher.api.ITransformationService` | 类变换服务，在类加载阶段修改字节码 |
| `net.neoforged.neoforgespi.locating.IModFileCandidateLocator` | 定位并发现所有候选 Mod 文件 |
| `net.neoforged.neoforgespi.locating.IModFileReader` | 读取并解析 Mod 文件内容 |
| `net.neoforged.neoforgespi.locating.IDependencyLocator` | 解析 Mod 依赖关系 |
| `net.neoforged.neoforgespi.earlywindow.GraphicsBootstrapper` | 图形引导，初始化渲染环境 |
| `net.neoforged.neoforgespi.earlywindow.ImmediateWindowProvider` | 早期窗口，在 Minecraft 主窗口出现前提供临时窗口 |

---

## Jar-in-Jar 限制

由于 ModLauncher 和 FML 的模块化分层设计，**Early Service 无法通过 Jar-in-Jar 的方式被访问**。如果 Coremod 同时需要提供 Early Service 和普通 Mod，必须将 Early Service 放在外层 JAR，将 Mod 本体放在内层 JAR，并自行编写 `IModFileCandidateLocator` 来手动加载内层 Mod。

::: details 开发环境的特殊情况

在开发环境（IDE 直接运行）中，正在开发的 Mod 通常不以 JAR 形式存在，而是作为 classpath 上的目录或单个 class 文件。这种形态走的是 FML 的 **开发环境加载路径**，与生产环境的 JAR 加载路径不同——类加载和模块发现的过程更为扁平。

因此在某些情况下，开发环境中可以实现 Early Service 和普通 Mod 共存于同一模块，且不会触发模块重复导出的异常。但这属于开发环境的特殊行为，**不可依赖它作为正式方案**。

Jar-in-Jar 的限制仅在 **生产环境**（打包后的 JAR）中实际生效。

:::

---

## 是否需要自行编写 Locator

| 版本区间 | 是否需要自行编写 Locator |
|---|---|
| 1.20.6 ~ 1.21.8（PR [#375](https://github.com/neoforged/FancyModLoader/pull/375) 之前） | 需要 |
| PR [#375](https://github.com/neoforged/FancyModLoader/pull/375) 合并之后 | 不再需要 |

> 各版本对应的 NeoForge 版本及 Locator 编写细节后续补充。
