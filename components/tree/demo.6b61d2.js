(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{3178:function(P,B,i){P.exports={"basic-controlled":i(3963),basic:i(3964),"big-data":i(3965),"customized-icon":i(3966),directory:i(3967),"drag-debug":i(3968),draggable:i(3969),dynamic:i(3970),line:i(3971),search:i(3972),"switcher-icon":i(3973),"virtual-scroll":i(3974)}},3963:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B"]],"en-US":[["p","Controlled mode lets parent nodes reflect the status of child nodes more intelligently."]]},meta:{order:1,title:{"zh-CN":"\u53D7\u63A7\u64CD\u4F5C\u793A\u4F8B","en-US":"Controlled Tree"},filename:"components/tree/demo/basic-controlled.md",id:"components-tree-demo-basic-controlled"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-1'</span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-2'</span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-2'</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span>expandedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token keyword">if</span> <span class="token operator">not</span> set autoExpandParent <span class="token keyword">to</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">if</span> children expanded<span class="token punctuation">,</span> parent can <span class="token operator">not</span> collapse<span class="token punctuation">.</span>
    <span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">or</span><span class="token punctuation">,</span> you can remove all expanded children keys<span class="token punctuation">.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeys<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      onExpand<span class="token operator">=</span>{onExpand}
      expandedKeys<span class="token operator">=</span>{expandedKeys}
      autoExpandParent<span class="token operator">=</span>{autoExpandParent}
      onCheck<span class="token operator">=</span>{onCheck}
      checkedKeys<span class="token operator">=</span>{checkedKeys}
      onSelect<span class="token operator">=</span>{onSelect}
      selectedKeys<span class="token operator">=</span>{selectedKeys}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">expandedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>
    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-2'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0-2'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-2'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>expandedKeys<span class="token punctuation">,</span> setExpandedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>checkedKeys<span class="token punctuation">,</span> setCheckedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>selectedKeys<span class="token punctuation">,</span> setSelectedKeys<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>autoExpandParent<span class="token punctuation">,</span> setAutoExpandParent<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">expandedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onExpand'</span><span class="token punctuation">,</span> expandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// if not set autoExpandParent to false, if children expanded, parent can not collapse.</span>
    <span class="token comment">// or, you can remove all expanded children keys.</span>

    <span class="token function">setExpandedKeys</span><span class="token punctuation">(</span>expandedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setAutoExpandParent</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setCheckedKeys</span><span class="token punctuation">(</span>checkedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onSelect'</span><span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setSelectedKeys</span><span class="token punctuation">(</span>selectedKeys<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">checkedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>checkedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">selectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>selectedKeys<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
`},preview:function(){var f=i(0),G=i(33);function w(g){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(p){return typeof p}:w=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},w(g)}var k=C(i(0)),K=i(9);function S(){if(typeof WeakMap!="function")return null;var g=new WeakMap;return S=function(){return g},g}function C(g){if(g&&g.__esModule)return g;if(g===null||w(g)!=="object"&&typeof g!="function")return{default:g};var l=S();if(l&&l.has(g))return l.get(g);var p={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in g)if(Object.prototype.hasOwnProperty.call(g,s)){var o=c?Object.getOwnPropertyDescriptor(g,s):null;o&&(o.get||o.set)?Object.defineProperty(p,s,o):p[s]=g[s]}return p.default=g,l&&l.set(g,p),p}function E(g,l){return F(g)||z(g,l)||L(g,l)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(g,l){if(!!g){if(typeof g=="string")return j(g,l);var p=Object.prototype.toString.call(g).slice(8,-1);if(p==="Object"&&g.constructor&&(p=g.constructor.name),p==="Map"||p==="Set")return Array.from(g);if(p==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))return j(g,l)}}function j(g,l){(l==null||l>g.length)&&(l=g.length);for(var p=0,c=new Array(l);p<l;p++)c[p]=g[p];return c}function z(g,l){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(g)))){var p=[],c=!0,s=!1,o=void 0;try{for(var u=g[Symbol.iterator](),m;!(c=(m=u.next()).done)&&(p.push(m.value),!(l&&p.length===l));c=!0);}catch(x){s=!0,o=x}finally{try{!c&&u.return!=null&&u.return()}finally{if(s)throw o}}return p}}function F(g){if(Array.isArray(g))return g}var M=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],T=function(){var l=(0,k.useState)(["0-0-0","0-0-1"]),p=E(l,2),c=p[0],s=p[1],o=(0,k.useState)(["0-0-0"]),u=E(o,2),m=u[0],x=u[1],N=(0,k.useState)([]),y=E(N,2),d=y[0],t=y[1],n=(0,k.useState)(!0),a=E(n,2),e=a[0],r=a[1],v=function(D){console.log("onExpand",D),s(D),r(!1)},b=function(D){console.log("onCheck",D),x(D)},O=function(D,A){console.log("onSelect",A),t(D)};return k.default.createElement(K.Tree,{checkable:!0,onExpand:v,expandedKeys:c,autoExpandParent:e,onCheck:b,checkedKeys:m,onSelect:O,selectedKeys:d,treeData:M})};return k.default.createElement(T,null)}}},3964:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5C55\u793A\u53EF\u52FE\u9009\uFF0C\u53EF\u9009\u4E2D\uFF0C\u7981\u7528\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B49\u529F\u80FD\u3002"]],"en-US":[["p","The most basic usage, tell you how to use checkable, selectable, disabled, defaultExpandKeys, and etc."]]},meta:{order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},filename:"components/tree/demo/basic.md",id:"components-tree-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token operator">&lt;</span>span style<span class="token operator">=</span>{{ color<span class="token punctuation">:</span> <span class="token string">'#1890ff'</span> }}<span class="token operator">></span>sss<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">></span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onCheck <span class="token operator">=</span> <span class="token punctuation">(</span>checkedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>Tree
      checkable
      defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultSelectedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      defaultCheckedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span>}
      onSelect<span class="token operator">=</span>{onSelect}
      onCheck<span class="token operator">=</span>{onCheck}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token operator">:</span> <span class="token string">'#1890ff'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        disabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            disableCheckbox<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
                <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
                  color<span class="token operator">:</span> <span class="token string">'#1890ff'</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
              <span class="token punctuation">></span></span>
                sss
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onCheck</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checkedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCheck'</span><span class="token punctuation">,</span> checkedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
      <span class="token attr-name">checkable</span>
      <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">defaultCheckedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-1'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onCheck</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onCheck<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
`},preview:function(){var f=i(0),G=i(33),w=i(9),k=[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",disabled:!0,children:[{title:"leaf",key:"0-0-0-0",disableCheckbox:!0},{title:"leaf",key:"0-0-0-1"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:f.createElement("span",{style:{color:"#1890ff"}},"sss"),key:"0-0-1-0"}]}]}],K=function(){var C=function(L,j){console.log("selected",L,j)},E=function(L,j){console.log("onCheck",L,j)};return f.createElement(w.Tree,{checkable:!0,defaultExpandedKeys:["0-0-0","0-0-1"],defaultSelectedKeys:["0-0-0","0-0-1"],defaultCheckedKeys:["0-0-0","0-0-1"],onSelect:C,onCheck:E,treeData:k})};return f.createElement(K,null)}}},3965:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u5927\u6570\u636E\u5C55\u793A\u3002"]],"en-US":[["p","Plenty of tree nodes."]]},meta:{order:99,title:{"zh-CN":"\u5927\u6570\u636E","en-US":"Big data"},debug:!0,filename:"components/tree/demo/big-data.md",id:"components-tree-demo-big-data"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span>
      key<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">\`l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Demo <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> j <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">child </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>j<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  treeData<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">parent </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">l-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">400</span><span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){for(var f=i(0),G=i(33),w=i(9),k=[],K=0;K<100;K+=1){for(var S=[],C=0;C<100;C+=1)S.push({title:"child ".concat(K,"-").concat(C),key:"l-".concat(K,"-").concat(C)});k.push({title:"parent ".concat(K),key:"l-".concat(K),children:S})}var E=function(){return f.createElement(w.Tree,{defaultExpandAll:!0,height:400,treeData:k})};return f.createElement(E,null)}}},3966:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u53EF\u4EE5\u9488\u5BF9\u4E0D\u540C\u7684\u8282\u70B9\u5B9A\u5236\u56FE\u6807\u3002"]],"en-US":[["p","You can customize icons for different nodes."]]},meta:{order:6,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u56FE\u6807","en-US":"Customize Icon"},filename:"components/tree/demo/customized-icon.md",id:"components-tree-demo-customized-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SmileOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MehOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> selected <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FrownFilled</span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FrownOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon={&lt;DownOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>
    treeData<span class="token operator">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span>
  <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  DownOutlined<span class="token punctuation">,</span>
  FrownOutlined<span class="token punctuation">,</span>
  SmileOutlined<span class="token punctuation">,</span>
  MehOutlined<span class="token punctuation">,</span>
  FrownFilled<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SmileOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MehOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">icon</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> selected <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>selected <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownFilled</span></span> <span class="token punctuation">/></span></span> <span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FrownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
    <span class="token attr-name">showIcon</span>
    <span class="token attr-name">defaultExpandAll</span>
    <span class="token attr-name">defaultSelectedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
    <span class="token attr-name">switcherIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span></span>
    <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
  <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
  mountNode<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33),w=i(9),k=i(48),K=[{title:"parent 1",key:"0-0",icon:f.createElement(k.SmileOutlined,null),children:[{title:"leaf",key:"0-0-0",icon:f.createElement(k.MehOutlined,null)},{title:"leaf",key:"0-0-1",icon:function(C){var E=C.selected;return E?f.createElement(k.FrownFilled,null):f.createElement(k.FrownOutlined,null)}}]}];return f.createElement(w.Tree,{showIcon:!0,defaultExpandAll:!0,defaultSelectedKeys:["0-0-0"],switcherIcon:f.createElement(k.DownOutlined,null),treeData:K})}}},3967:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u5185\u7F6E\u7684\u76EE\u5F55\u6811\uFF0C",["code","multiple"]," \u6A21\u5F0F\u652F\u6301 ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," \u590D\u9009\u3002"]],"en-US":[["p","Built-in directory tree. ",["code","multiple"]," support ",["code","ctrl(Windows)"]," / ",["code","command(Mac)"]," selection."]]},meta:{order:7,title:{"zh-CN":"\u76EE\u5F55","en-US":"directory"},filename:"components/tree/demo/directory.md",id:"components-tree-demo-directory"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> { DirectoryTree } <span class="token operator">=</span> Tree<span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
      { title<span class="token punctuation">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC<span class="token operator">&lt;</span>{}<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>keys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onExpand <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>DirectoryTree
      multiple
      defaultExpandAll
      onSelect<span class="token operator">=</span>{onSelect}
      onExpand<span class="token operator">=</span>{onExpand}
      treeData<span class="token operator">=</span>{treeData}
    <span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> DirectoryTree <span class="token punctuation">}</span> <span class="token operator">=</span> Tree<span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 0'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf 0-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf 0-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'leaf 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-1'</span><span class="token punctuation">,</span>
        isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">keys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Select'</span><span class="token punctuation">,</span> keys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Trigger Expand'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DirectoryTree</span></span>
      <span class="token attr-name">multiple</span>
      <span class="token attr-name">defaultExpandAll</span>
      <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
      <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onExpand<span class="token punctuation">}</span></span>
      <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
    <span class="token punctuation">/></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
`},preview:function(){var f=i(0),G=i(33),w=i(9),k=w.Tree.DirectoryTree,K=[{title:"parent 0",key:"0-0",children:[{title:"leaf 0-0",key:"0-0-0",isLeaf:!0},{title:"leaf 0-1",key:"0-0-1",isLeaf:!0}]},{title:"parent 1",key:"0-1",children:[{title:"leaf 1-0",key:"0-1-0",isLeaf:!0},{title:"leaf 1-1",key:"0-1-1",isLeaf:!0}]}],S=function(){var E=function(j,z){console.log("Trigger Select",j,z)},I=function(){console.log("Trigger Expand")};return f.createElement(k,{multiple:!0,defaultExpandAll:!0,onSelect:E,onExpand:I,treeData:K})};return f.createElement(S,null)}}},3968:function(P,B,i){P.exports={content:[],meta:{order:98,title:{"zh-CN":"Drag Debug","en-US":"Drag Debug"},debug:!0,filename:"components/tree/demo/drag-debug.md",id:"components-tree-demo-drag-debug"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CarryOutOutlined</span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDragEnter <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment" spellcheck="true">// this.setState({</span>
    <span class="token comment" spellcheck="true">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment" spellcheck="true">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDrop <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment" spellcheck="true">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLine <span class="token operator">=</span> showLine <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        showLine<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowIcon <span class="token operator">=</span> showIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  setShowLeafIcon <span class="token operator">=</span> showLeafIcon <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      showLine<span class="token punctuation">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span><span class="token operator">></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          showLine<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showLeafIcon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key<span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    showLine<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    showLeafIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// this.setState({</span>
    <span class="token comment">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5C3E\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLine</span> <span class="token operator">=</span> <span class="token parameter">showLine</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>showLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>showLeafIcon<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token operator">:</span> <span class="token punctuation">{</span>
            showLeafIcon<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          showLine<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        showLine<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowIcon</span> <span class="token operator">=</span> <span class="token parameter">showIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showIcon<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">setShowLeafIcon</span> <span class="token operator">=</span> <span class="token parameter">showLeafIcon</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token punctuation">,</span>
      showLine<span class="token operator">:</span> <span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> showLine<span class="token punctuation">,</span> showIcon<span class="token punctuation">,</span> showLeafIcon<span class="token punctuation">,</span> expandedKeys <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> setShowLine<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">,</span> setShowLeafIcon <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
          showLine<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
          showLeafIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
          <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
          <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
          <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">draggable</span>
          <span class="token attr-name">blockNode</span>
          <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
          <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33);function w(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(e){return typeof e}:w=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(n)}var k=i(9),K=i(48);function S(n){return L(n)||I(n)||E(n)||C()}function C(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function E(n,a){if(!!n){if(typeof n=="string")return j(n,a);var e=Object.prototype.toString.call(n).slice(8,-1);if(e==="Object"&&n.constructor&&(e=n.constructor.name),e==="Map"||e==="Set")return Array.from(n);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(n,a)}}function I(n){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(n))return Array.from(n)}function L(n){if(Array.isArray(n))return j(n)}function j(n,a){(a==null||a>n.length)&&(a=n.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=n[e];return r}function z(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function F(n,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function M(n,a,e){return a&&F(n.prototype,a),e&&F(n,e),n}function T(n,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&g(n,a)}function g(n,a){return g=Object.setPrototypeOf||function(r,v){return r.__proto__=v,r},g(n,a)}function l(n){var a=s();return function(){var r=o(n),v;if(a){var b=o(this).constructor;v=Reflect.construct(r,arguments,b)}else v=r.apply(this,arguments);return p(this,v)}}function p(n,a){return a&&(w(a)==="object"||typeof a=="function")?a:c(n)}function c(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function s(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}function o(n){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(n)}function u(n,a,e){return a in n?Object.defineProperty(n,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[a]=e,n}var m=3,x=2,N=1,y=[],d=function n(a,e,r){for(var v=e||"0",b=r||y,O=[],h=0;h<m;h++){var D="".concat(v,"-").concat(h);b.push({title:D,key:D,icon:f.createElement(K.CarryOutOutlined,null)}),h<x&&O.push(D)}if(a<0)return b;var A=a-1;O.forEach(function(W,V){return b[V].children=[],n(A,W,b[V].children)})};d(N);var t=function(n){T(e,n);var a=l(e);function e(){var r;z(this,e);for(var v=arguments.length,b=new Array(v),O=0;O<v;O++)b[O]=arguments[O];return r=a.call.apply(a,[this].concat(b)),u(c(r),"state",{gData:y,expandedKeys:["0-0","0-0-0","0-0-0-0"],showLine:!0,showIcon:!0,showLeafIcon:!0}),u(c(r),"onDragEnter",function(h){console.log(h)}),u(c(r),"onDrop",function(h){console.log(h);var D=h.node.key,A=h.dragNode.key,W=h.node.pos.split("-"),V=h.dropPosition-Number(W[W.length-1]),_=function R(U,X,J){for(var q=0;q<U.length;q++){if(U[q].key===X)return J(U[q],q,U);U[q].children&&R(U[q].children,X,J)}},Y=S(r.state.gData),Q;if(_(Y,A,function(R,U,X){X.splice(U,1),Q=R}),!h.dropToGap)_(Y,D,function(R){R.children=R.children||[],R.children.push(Q)});else if((h.node.props.children||[]).length>0&&h.node.props.expanded&&V===1)_(Y,D,function(R){R.children=R.children||[],R.children.unshift(Q)});else{var Z,$;_(Y,D,function(R,U,X){Z=X,$=U}),V===-1?Z.splice($,0,Q):Z.splice($+1,0,Q)}r.setState({gData:Y})}),u(c(r),"setShowLine",function(h){var D=r.state.showLeafIcon;h?D?r.setState({showLine:{showLeafIcon:!0}}):r.setState({showLine:!0}):r.setState({showLine:!1})}),u(c(r),"setShowIcon",function(h){r.setState({showIcon:h})}),u(c(r),"setShowLeafIcon",function(h){r.setState({showLeafIcon:h,showLine:{showLeafIcon:h}})}),r}return M(e,[{key:"render",value:function(){var v=this.state,b=v.showLine,O=v.showIcon,h=v.showLeafIcon,D=v.expandedKeys,A=this.setShowLine,W=this.setShowIcon,V=this.setShowLeafIcon;return f.createElement(f.Fragment,null,f.createElement("div",{style:{marginBottom:16}},"showLine: ",f.createElement(k.Switch,{checked:b,onChange:A}),f.createElement("br",null),f.createElement("br",null),"showIcon: ",f.createElement(k.Switch,{checked:O,onChange:W}),f.createElement("br",null),f.createElement("br",null),"showLeafIcon: ",f.createElement(k.Switch,{checked:h,onChange:V})),f.createElement(k.Tree,{showLine:b,showIcon:O,className:"draggable-tree",defaultExpandedKeys:D,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop,treeData:this.state.gData}))}}]),e}(f.Component);return f.createElement(t,null)}}},3969:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u5C06\u8282\u70B9\u62D6\u62FD\u5230\u5176\u4ED6\u8282\u70B9\u5185\u90E8\u6216\u524D\u540E\u3002"]],"en-US":[["p","Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode."]]},meta:{order:2,title:{"zh-CN":"\u62D6\u52A8\u793A\u4F8B","en-US":"draggable"},filename:"components/tree/demo/draggable.md",id:"components-tree-demo-draggable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDragEnter <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment" spellcheck="true">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment" spellcheck="true">// this.setState({</span>
    <span class="token comment" spellcheck="true">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment" spellcheck="true">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onDrop <span class="token operator">=</span> info <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> loop <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment" spellcheck="true">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment" spellcheck="true">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment" spellcheck="true">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment" spellcheck="true">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment" spellcheck="true">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment" spellcheck="true">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token punctuation">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">draggable</span>
        <span class="token attr-name">blockNode</span>
        <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
        <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    gData<span class="token punctuation">,</span>
    expandedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDragEnter</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// expandedKeys \u9700\u8981\u53D7\u63A7\u65F6\u8BBE\u7F6E</span>
    <span class="token comment">// this.setState({</span>
    <span class="token comment">//   expandedKeys: info.expandedKeys,</span>
    <span class="token comment">// });</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onDrop</span> <span class="token operator">=</span> <span class="token parameter">info</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropKey <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dragKey <span class="token operator">=</span> info<span class="token punctuation">.</span>dragNode<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPos <span class="token operator">=</span> info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>pos<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dropPosition <span class="token operator">=</span> info<span class="token punctuation">.</span>dropPosition <span class="token operator">-</span> <span class="token function">Number</span><span class="token punctuation">(</span>dropPos<span class="token punctuation">[</span>dropPos<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">callback</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">// Find dragObject</span>
    <span class="token keyword">let</span> dragObj<span class="token punctuation">;</span>
    <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dragKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      dragObj <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>info<span class="token punctuation">.</span>dropToGap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Drop on the content</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
      <span class="token punctuation">(</span>info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token comment">// Has children</span>
      info<span class="token punctuation">.</span>node<span class="token punctuation">.</span>props<span class="token punctuation">.</span>expanded <span class="token operator">&amp;&amp;</span> <span class="token comment">// Is expanded</span>
      dropPosition <span class="token operator">===</span> <span class="token number">1</span> <span class="token comment">// On the bottom gap</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span>children <span class="token operator">=</span> item<span class="token punctuation">.</span>children <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// where to insert \u793A\u4F8B\u6DFB\u52A0\u5230\u5934\u90E8\uFF0C\u53EF\u4EE5\u662F\u968F\u610F\u4F4D\u7F6E</span>
        item<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// in previous version, we use item.children.push(dragObj) to insert the</span>
        <span class="token comment">// item to the tail of the children</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> ar<span class="token punctuation">;</span>
      <span class="token keyword">let</span> i<span class="token punctuation">;</span>
      <span class="token function">loop</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> dropKey<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index<span class="token punctuation">,</span> arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        ar <span class="token operator">=</span> arr<span class="token punctuation">;</span>
        i <span class="token operator">=</span> index<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dropPosition <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        ar<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> dragObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      gData<span class="token operator">:</span> data<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>draggable-tree<span class="token punctuation">"</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>expandedKeys<span class="token punctuation">}</span></span>
        <span class="token attr-name">draggable</span>
        <span class="token attr-name">blockNode</span>
        <span class="token attr-name">onDragEnter</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnter<span class="token punctuation">}</span></span>
        <span class="token attr-name">onDrop</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrop<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>gData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33);function w(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(a){return typeof a}:w=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},w(t)}var k=i(9);function K(t){return I(t)||E(t)||C(t)||S()}function S(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function C(t,n){if(!!t){if(typeof t=="string")return L(t,n);var a=Object.prototype.toString.call(t).slice(8,-1);if(a==="Object"&&t.constructor&&(a=t.constructor.name),a==="Map"||a==="Set")return Array.from(t);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(t,n)}}function E(t){if(typeof Symbol!="undefined"&&Symbol.iterator in Object(t))return Array.from(t)}function I(t){if(Array.isArray(t))return L(t)}function L(t,n){(n==null||n>t.length)&&(n=t.length);for(var a=0,e=new Array(n);a<n;a++)e[a]=t[a];return e}function j(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function z(t,n){for(var a=0;a<n.length;a++){var e=n[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function F(t,n,a){return n&&z(t.prototype,n),a&&z(t,a),t}function M(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&T(t,n)}function T(t,n){return T=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},T(t,n)}function g(t){var n=c();return function(){var e=s(t),r;if(n){var v=s(this).constructor;r=Reflect.construct(e,arguments,v)}else r=e.apply(this,arguments);return l(this,r)}}function l(t,n){return n&&(w(n)==="object"||typeof n=="function")?n:p(t)}function p(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},s(t)}function o(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}var u=3,m=2,x=1,N=[],y=function t(n,a,e){for(var r=a||"0",v=e||N,b=[],O=0;O<u;O++){var h="".concat(r,"-").concat(O);v.push({title:h,key:h}),O<m&&b.push(h)}if(n<0)return v;var D=n-1;b.forEach(function(A,W){return v[W].children=[],t(D,A,v[W].children)})};y(x);var d=function(t){M(a,t);var n=g(a);function a(){var e;j(this,a);for(var r=arguments.length,v=new Array(r),b=0;b<r;b++)v[b]=arguments[b];return e=n.call.apply(n,[this].concat(v)),o(p(e),"state",{gData:N,expandedKeys:["0-0","0-0-0","0-0-0-0"]}),o(p(e),"onDragEnter",function(O){console.log(O)}),o(p(e),"onDrop",function(O){console.log(O);var h=O.node.key,D=O.dragNode.key,A=O.node.pos.split("-"),W=O.dropPosition-Number(A[A.length-1]),V=function $(R,U,X){for(var J=0;J<R.length;J++){if(R[J].key===U)return X(R[J],J,R);R[J].children&&$(R[J].children,U,X)}},_=K(e.state.gData),Y;if(V(_,D,function($,R,U){U.splice(R,1),Y=$}),!O.dropToGap)V(_,h,function($){$.children=$.children||[],$.children.unshift(Y)});else if((O.node.props.children||[]).length>0&&O.node.props.expanded&&W===1)V(_,h,function($){$.children=$.children||[],$.children.unshift(Y)});else{var Q,Z;V(_,h,function($,R,U){Q=U,Z=R}),W===-1?Q.splice(Z,0,Y):Q.splice(Z+1,0,Y)}e.setState({gData:_})}),e}return F(a,[{key:"render",value:function(){return f.createElement(k.Tree,{className:"draggable-tree",defaultExpandedKeys:this.state.expandedKeys,draggable:!0,blockNode:!0,onDragEnter:this.onDragEnter,onDrop:this.onDrop,treeData:this.state.gData})}}]),a}(f.Component);return f.createElement(d,null)}}},3970:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u70B9\u51FB\u5C55\u5F00\u8282\u70B9\uFF0C\u52A8\u6001\u52A0\u8F7D\u6570\u636E\u3002"]],"en-US":[["p","To load data asynchronously when click to expand a treeNode."]]},meta:{order:3,title:{"zh-CN":"\u5F02\u6B65\u6570\u636E\u52A0\u8F7D","en-US":"load data asynchronously"},filename:"components/tree/demo/dynamic.md",id:"components-tree-demo-dynamic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Tree } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>

interface DataNode {
  title<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  key<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>
  isLeaf<span class="token operator">?</span><span class="token punctuation">:</span> boolean<span class="token comment" spellcheck="true">;</span>
  children<span class="token operator">?</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> initTreeDate<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'1'</span> }<span class="token punctuation">,</span>
  { title<span class="token punctuation">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token operator">/</span><span class="token operator">/</span> It's just a simple demo<span class="token punctuation">.</span> You can use tree map <span class="token keyword">to</span> optimize update perf<span class="token punctuation">.</span>
function <span class="token function">updateTreeData</span><span class="token punctuation">(</span>list<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> {
  return list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>node <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">==</span><span class="token operator">=</span> key<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> {
      return {
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      }<span class="token comment" spellcheck="true">;</span>
    }
    return node<span class="token comment" spellcheck="true">;</span>
  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC<span class="token operator">&lt;</span>{}<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeDate<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  function <span class="token function">onLoadData</span><span class="token punctuation">(</span>{ key<span class="token punctuation">,</span> children }<span class="token punctuation">:</span> any<span class="token punctuation">)</span> {
    return new Promise<span class="token operator">&lt;</span>void<span class="token operator">></span><span class="token punctuation">(</span>resolve <span class="token operator">=</span><span class="token operator">></span> {
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> {
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
        return<span class="token comment" spellcheck="true">;</span>
      }
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
        <span class="token function">setTreeData</span><span class="token punctuation">(</span>origin <span class="token operator">=</span><span class="token operator">></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">0</span>\` }<span class="token punctuation">,</span>
            { title<span class="token punctuation">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> \`\${key}<span class="token operator">-</span><span class="token number">1</span>\` }<span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
      }<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }

  return <span class="token operator">&lt;</span>Tree loadData<span class="token operator">=</span>{onLoadData} treeData<span class="token operator">=</span>{treeData} <span class="token operator">/</span><span class="token operator">></span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">DataNode</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> string<span class="token punctuation">;</span>
  key<span class="token operator">:</span> string<span class="token punctuation">;</span>
  isLeaf<span class="token operator">?</span><span class="token operator">:</span> boolean<span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> initTreeDate<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'1'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span> isLeaf<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>
<span class="token keyword">function</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> key<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> children<span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span><span class="token operator">:</span> DataNode<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>node<span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeDate<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">onLoadData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span><span class="token parameter">origin</span> <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> initTreeDate <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Expand to load'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'1'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'Tree Node'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'2'</span><span class="token punctuation">,</span>
    isLeaf<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// It's just a simple demo. You can use tree map to optimize update perf.</span>

<span class="token keyword">function</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span><span class="token parameter">list<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>node<span class="token punctuation">,</span> children <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>node<span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token function">updateTreeData</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> key<span class="token punctuation">,</span> children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> node<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>treeData<span class="token punctuation">,</span> setTreeData<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span>initTreeDate<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">onLoadData</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> key<span class="token punctuation">,</span> children <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">setTreeData</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span> <span class="token operator">=></span>
          <span class="token function">updateTreeData</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-0</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">'Child Node'</span><span class="token punctuation">,</span>
              key<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-1</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">loadData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onLoadData<span class="token punctuation">}</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
`},preview:function(){var f=i(0),G=i(33);function w(s){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(u){return typeof u}:w=function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},w(s)}var k=C(i(0)),K=i(9);function S(){if(typeof WeakMap!="function")return null;var s=new WeakMap;return S=function(){return s},s}function C(s){if(s&&s.__esModule)return s;if(s===null||w(s)!=="object"&&typeof s!="function")return{default:s};var o=S();if(o&&o.has(s))return o.get(s);var u={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in s)if(Object.prototype.hasOwnProperty.call(s,x)){var N=m?Object.getOwnPropertyDescriptor(s,x):null;N&&(N.get||N.set)?Object.defineProperty(u,x,N):u[x]=s[x]}return u.default=s,o&&o.set(s,u),u}function E(s,o){return F(s)||z(s,o)||L(s,o)||I()}function I(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function L(s,o){if(!!s){if(typeof s=="string")return j(s,o);var u=Object.prototype.toString.call(s).slice(8,-1);if(u==="Object"&&s.constructor&&(u=s.constructor.name),u==="Map"||u==="Set")return Array.from(s);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return j(s,o)}}function j(s,o){(o==null||o>s.length)&&(o=s.length);for(var u=0,m=new Array(o);u<o;u++)m[u]=s[u];return m}function z(s,o){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(s)))){var u=[],m=!0,x=!1,N=void 0;try{for(var y=s[Symbol.iterator](),d;!(m=(d=y.next()).done)&&(u.push(d.value),!(o&&u.length===o));m=!0);}catch(t){x=!0,N=t}finally{try{!m&&y.return!=null&&y.return()}finally{if(x)throw N}}return u}}function F(s){if(Array.isArray(s))return s}function M(s,o){var u=Object.keys(s);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(s);o&&(m=m.filter(function(x){return Object.getOwnPropertyDescriptor(s,x).enumerable})),u.push.apply(u,m)}return u}function T(s){for(var o=1;o<arguments.length;o++){var u=arguments[o]!=null?arguments[o]:{};o%2?M(Object(u),!0).forEach(function(m){g(s,m,u[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(u)):M(Object(u)).forEach(function(m){Object.defineProperty(s,m,Object.getOwnPropertyDescriptor(u,m))})}return s}function g(s,o,u){return o in s?Object.defineProperty(s,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[o]=u,s}var l=[{title:"Expand to load",key:"0"},{title:"Expand to load",key:"1"},{title:"Tree Node",key:"2",isLeaf:!0}];function p(s,o,u){return s.map(function(m){return m.key===o?T(T({},m),{},{children:u}):m.children?T(T({},m),{},{children:p(m.children,o,u)}):m})}var c=function(){var o=(0,k.useState)(l),u=E(o,2),m=u[0],x=u[1];function N(y){var d=y.key,t=y.children;return new Promise(function(n){if(t){n();return}setTimeout(function(){x(function(a){return p(a,d,[{title:"Child Node",key:"".concat(d,"-0")},{title:"Child Node",key:"".concat(d,"-1")}])}),n()},1e3)})}return k.default.createElement(K.Tree,{loadData:N,treeData:m})};return k.default.createElement(c,null)}}},3971:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u8282\u70B9\u4E4B\u95F4\u5E26\u8FDE\u63A5\u7EBF\u7684\u6811\uFF0C\u5E38\u7528\u4E8E\u6587\u4EF6\u76EE\u5F55\u7ED3\u6784\u5C55\u793A\u3002\u4F7F\u7528 ",["code","showLine"]," \u5F00\u542F\uFF0C\u53EF\u4EE5\u7528 ",["code","switcherIcon"]," \u4FEE\u6539\u9ED8\u8BA4\u56FE\u6807\u3002"]],"en-US":[["p","Tree with connected line between nodes, turn on by ",["code","showLine"],", customize the preseted icon by ",["code","switcherIcon"],"."]]},meta:{order:5,title:{"zh-CN":"\u8FDE\u63A5\u7EBF","en-US":"Tree with line"},filename:"components/tree/demo/line.md",id:"components-tree-demo-line"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"tsx",highlighted:`import React<span class="token punctuation">,</span> { useState } from <span class="token string">'react'</span><span class="token comment" spellcheck="true">;</span>
import { Tree<span class="token punctuation">,</span> <span class="token keyword">Switch</span> } from <span class="token string">'antd'</span><span class="token comment" spellcheck="true">;</span>
import { CarryOutOutlined<span class="token punctuation">,</span> FormOutlined } from <span class="token string">'@ant-design/icons'</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token punctuation">(</span>
              <span class="token operator">&lt;></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
                <span class="token operator">&lt;</span>div<span class="token operator">></span>multiple line title<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
              <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>{ title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          {
            title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
            switcherIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>FormOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
          }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
  {
    title<span class="token punctuation">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token punctuation">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
      {
        title<span class="token punctuation">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token punctuation">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span>
        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
          { title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token punctuation">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token punctuation">:</span> <span class="token operator">&lt;</span>CarryOutOutlined <span class="token operator">/</span><span class="token operator">></span> }<span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      }<span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  }<span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>

<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span>FC<span class="token operator">&lt;</span>{}<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean | { showLeafIcon<span class="token punctuation">:</span> boolean }<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token punctuation">:</span> any<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSetLeafIcon <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span>{ showLeafIcon<span class="token punctuation">:</span> checked }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
  }<span class="token comment" spellcheck="true">;</span>

  <span class="token keyword">const</span> onSetShowLine <span class="token operator">=</span> <span class="token punctuation">(</span>checked<span class="token punctuation">:</span> boolean<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {
    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> {
      showLeafIcon <span class="token operator">?</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span>{ showLeafIcon }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    } <span class="token keyword">else</span> {
      <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
    }
  }<span class="token comment" spellcheck="true">;</span>

  return <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{{ marginBottom<span class="token punctuation">:</span> <span class="token number">16</span> }}<span class="token operator">></span>
        showLine<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{!!showLine} onChange<span class="token operator">=</span>{onSetShowLine} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{showIcon} onChange<span class="token operator">=</span>{setShowIcon} <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        <span class="token operator">&lt;</span>br <span class="token operator">/</span><span class="token operator">></span>
        showLeafIcon<span class="token punctuation">:</span> <span class="token operator">&lt;</span><span class="token keyword">Switch</span> checked<span class="token operator">=</span>{showLeafIcon} onChange<span class="token operator">=</span>{onSetLeafIcon} <span class="token operator">/</span><span class="token operator">></span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
      <span class="token operator">&lt;</span>Tree
        showLine<span class="token operator">=</span>{showLine}
        showIcon<span class="token operator">=</span>{showIcon}
        defaultExpandedKeys<span class="token operator">=</span>{<span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span>}
        onSelect<span class="token operator">=</span>{onSelect}
        treeData<span class="token operator">=</span>{treeData}
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>
}<span class="token comment" spellcheck="true">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>Demo <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>`}],highlightedCodes:{tsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            switcherIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span> icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Demo<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean <span class="token operator">|</span> <span class="token punctuation">{</span> showLeafIcon<span class="token operator">:</span> boolean <span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> useState<span class="token operator">&lt;</span>boolean<span class="token operator">></span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token operator">:</span> React<span class="token punctuation">.</span>Key<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> info<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetLeafIcon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showLeafIcon<span class="token operator">:</span> checked <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetShowLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked<span class="token operator">:</span> boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      showLeafIcon <span class="token operator">?</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span> showLeafIcon <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">16</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>
        showLine<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showLeafIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`,jsx:`<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> CarryOutOutlined<span class="token punctuation">,</span> FormOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token punctuation">(</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>multiple line title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">></span></span>
            <span class="token punctuation">)</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
            switcherIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">FormOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">'parent 2'</span><span class="token punctuation">,</span>
    key<span class="token operator">:</span> <span class="token string">'0-1'</span><span class="token punctuation">,</span>
    icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        title<span class="token operator">:</span> <span class="token string">'parent 2-0'</span><span class="token punctuation">,</span>
        key<span class="token operator">:</span> <span class="token string">'0-1-0'</span><span class="token punctuation">,</span>
        icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-1-0-0'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-1-0-1'</span><span class="token punctuation">,</span>
            icon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">CarryOutOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">Demo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLine<span class="token punctuation">,</span> setShowLine<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showIcon<span class="token punctuation">,</span> setShowIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>showLeafIcon<span class="token punctuation">,</span> setShowLeafIcon<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetLeafIcon</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">setShowLeafIcon</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      showLeafIcon<span class="token operator">:</span> checked<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">onSetShowLine</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">checked</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      showLeafIcon
        <span class="token operator">?</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span>
        <span class="token operator">:</span> <span class="token function">setShowLine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            showLeafIcon<span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">setShowLine</span><span class="token punctuation">(</span>checked<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>
          marginBottom<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
      <span class="token punctuation">></span></span>
        showLine<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token operator">!</span><span class="token operator">!</span>showLine<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetShowLine<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>setShowIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>
        showLeafIcon<span class="token operator">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Switch</span></span> <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLeafIcon<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSetLeafIcon<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
        <span class="token attr-name">showLine</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showLine<span class="token punctuation">}</span></span>
        <span class="token attr-name">showIcon</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>showIcon<span class="token punctuation">}</span></span>
        <span class="token attr-name">defaultExpandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
        <span class="token attr-name">onSelect</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onSelect<span class="token punctuation">}</span></span>
        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>
      <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
`},preview:function(){var f=i(0),G=i(33);function w(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(c){return typeof c}:w=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},w(l)}var k=E(i(0)),K=i(9),S=i(48);function C(){if(typeof WeakMap!="function")return null;var l=new WeakMap;return C=function(){return l},l}function E(l){if(l&&l.__esModule)return l;if(l===null||w(l)!=="object"&&typeof l!="function")return{default:l};var p=C();if(p&&p.has(l))return p.get(l);var c={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in l)if(Object.prototype.hasOwnProperty.call(l,o)){var u=s?Object.getOwnPropertyDescriptor(l,o):null;u&&(u.get||u.set)?Object.defineProperty(c,o,u):c[o]=l[o]}return c.default=l,p&&p.set(l,c),c}function I(l,p){return M(l)||F(l,p)||j(l,p)||L()}function L(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function j(l,p){if(!!l){if(typeof l=="string")return z(l,p);var c=Object.prototype.toString.call(l).slice(8,-1);if(c==="Object"&&l.constructor&&(c=l.constructor.name),c==="Map"||c==="Set")return Array.from(l);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return z(l,p)}}function z(l,p){(p==null||p>l.length)&&(p=l.length);for(var c=0,s=new Array(p);c<p;c++)s[c]=l[c];return s}function F(l,p){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(l)))){var c=[],s=!0,o=!1,u=void 0;try{for(var m=l[Symbol.iterator](),x;!(s=(x=m.next()).done)&&(c.push(x.value),!(p&&c.length===p));s=!0);}catch(N){o=!0,u=N}finally{try{!s&&m.return!=null&&m.return()}finally{if(o)throw u}}return c}}function M(l){if(Array.isArray(l))return l}var T=[{title:"parent 1",key:"0-0",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"parent 1-0",key:"0-0-0",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-0-0",icon:k.default.createElement(S.CarryOutOutlined,null)},{title:k.default.createElement(k.default.Fragment,null,k.default.createElement("div",null,"multiple line title"),k.default.createElement("div",null,"multiple line title")),key:"0-0-0-1",icon:k.default.createElement(S.CarryOutOutlined,null)},{title:"leaf",key:"0-0-0-2",icon:k.default.createElement(S.CarryOutOutlined,null)}]},{title:"parent 1-1",key:"0-0-1",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-1-0",icon:k.default.createElement(S.CarryOutOutlined,null)}]},{title:"parent 1-2",key:"0-0-2",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"leaf",key:"0-0-2-0",icon:k.default.createElement(S.CarryOutOutlined,null)},{title:"leaf",key:"0-0-2-1",icon:k.default.createElement(S.CarryOutOutlined,null),switcherIcon:k.default.createElement(S.FormOutlined,null)}]}]},{title:"parent 2",key:"0-1",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"parent 2-0",key:"0-1-0",icon:k.default.createElement(S.CarryOutOutlined,null),children:[{title:"leaf",key:"0-1-0-0",icon:k.default.createElement(S.CarryOutOutlined,null)},{title:"leaf",key:"0-1-0-1",icon:k.default.createElement(S.CarryOutOutlined,null)}]}]}],g=function(){var p=(0,k.useState)(!0),c=I(p,2),s=c[0],o=c[1],u=(0,k.useState)(!1),m=I(u,2),x=m[0],N=m[1],y=(0,k.useState)(!0),d=I(y,2),t=d[0],n=d[1],a=function(b,O){console.log("selected",b,O)},e=function(b){n(b),o({showLeafIcon:b})},r=function(b){o(b&&(t?b:{showLeafIcon:t}))};return k.default.createElement("div",null,k.default.createElement("div",{style:{marginBottom:16}},"showLine: ",k.default.createElement(K.Switch,{checked:!!s,onChange:r}),k.default.createElement("br",null),k.default.createElement("br",null),"showIcon: ",k.default.createElement(K.Switch,{checked:x,onChange:N}),k.default.createElement("br",null),k.default.createElement("br",null),"showLeafIcon: ",k.default.createElement(K.Switch,{checked:t,onChange:e})),k.default.createElement(K.Tree,{showLine:s,showIcon:x,defaultExpandedKeys:["0-0-0"],onSelect:a,treeData:T}))};return k.default.createElement(g,null)}}},3972:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u53EF\u641C\u7D22\u7684\u6811\u3002"]],"en-US":[["p","Searchable Tree."]]},meta:{order:4,title:{"zh-CN":"\u53EF\u641C\u7D22","en-US":"Searchable"},filename:"components/tree/demo/search.md",id:"components-tree-demo-search"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> generateData <span class="token operator">=</span> <span class="token punctuation">(</span>_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token punctuation">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> index<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> generateList <span class="token operator">=</span> data <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> title<span class="token punctuation">:</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>gData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> getParentKey <span class="token operator">=</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> tree<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> parentKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SearchTree</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    expandedKeys<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    searchValue<span class="token punctuation">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    autoExpandParent<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onExpand <span class="token operator">=</span> expandedKeys <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      expandedKeys<span class="token punctuation">,</span>
      autoExpandParent<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  onChange <span class="token operator">=</span> e <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> expandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> gData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      expandedKeys<span class="token punctuation">,</span>
      searchValue<span class="token punctuation">:</span> value<span class="token punctuation">,</span>
      autoExpandParent<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> searchValue<span class="token punctuation">,</span> expandedKeys<span class="token punctuation">,</span> autoExpandParent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> loop <span class="token operator">=</span> data <span class="token operator">=</span><span class="token operator">></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token punctuation">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          key<span class="token punctuation">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Search</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
          <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onExpand<span class="token punctuation">}</span></span>
          <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">loop</span><span class="token punctuation">(</span>gData<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchTree</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree<span class="token punctuation">,</span> Input <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> Search <span class="token punctuation">}</span> <span class="token operator">=</span> Input<span class="token punctuation">;</span>

<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> z <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> gData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">generateData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">_level<span class="token punctuation">,</span> _preKey<span class="token punctuation">,</span> _tns</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> preKey <span class="token operator">=</span> _preKey <span class="token operator">||</span> <span class="token string">'0'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tns <span class="token operator">=</span> _tns <span class="token operator">||</span> gData<span class="token punctuation">;</span>

  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> x<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>preKey<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    tns<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> title<span class="token operator">:</span> key<span class="token punctuation">,</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      children<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>_level <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> tns<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> level <span class="token operator">=</span> _level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
  children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">generateData</span><span class="token punctuation">(</span>level<span class="token punctuation">,</span> key<span class="token punctuation">,</span> tns<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateData</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">generateList</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> data<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> data<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> key <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    dataList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> key<span class="token punctuation">,</span> title<span class="token operator">:</span> key <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">generateList</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">generateList</span><span class="token punctuation">(</span>gData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getParentKey</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> tree</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> parentKey<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tree<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> tree<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>key <span class="token operator">===</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> node<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        parentKey <span class="token operator">=</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> parentKey<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">SearchTree</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  state <span class="token operator">=</span> <span class="token punctuation">{</span>
    expandedKeys<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    searchValue<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    autoExpandParent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onExpand</span> <span class="token operator">=</span> <span class="token parameter">expandedKeys</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      expandedKeys<span class="token punctuation">,</span>
      autoExpandParent<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> <span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span> <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
    <span class="token keyword">const</span> expandedKeys <span class="token operator">=</span> dataList
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token function">getParentKey</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> gData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> i<span class="token punctuation">,</span> self</span><span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      expandedKeys<span class="token punctuation">,</span>
      searchValue<span class="token operator">:</span> value<span class="token punctuation">,</span>
      autoExpandParent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> searchValue<span class="token punctuation">,</span> expandedKeys<span class="token punctuation">,</span> autoExpandParent <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">loop</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=></span>
      data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>searchValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> beforeStr <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> afterStr <span class="token operator">=</span> item<span class="token punctuation">.</span>title<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>index <span class="token operator">+</span> searchValue<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> title <span class="token operator">=</span>
          index <span class="token operator">></span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>beforeStr<span class="token punctuation">}</span>
              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>site-tree-search-value<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>searchValue<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
              <span class="token punctuation">{</span>afterStr<span class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> title<span class="token punctuation">,</span> key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span> children<span class="token operator">:</span> <span class="token function">loop</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          title<span class="token punctuation">,</span>
          key<span class="token operator">:</span> item<span class="token punctuation">.</span>key<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Search</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginBottom<span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span>
          <span class="token attr-name">onExpand</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onExpand<span class="token punctuation">}</span></span>
          <span class="token attr-name">expandedKeys</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>expandedKeys<span class="token punctuation">}</span></span>
          <span class="token attr-name">autoExpandParent</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>autoExpandParent<span class="token punctuation">}</span></span>
          <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token function">loop</span><span class="token punctuation">(</span>gData<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
        <span class="token punctuation">/></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SearchTree</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33);function w(y){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(t){return typeof t}:w=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(y)}var k=i(9);function K(y,d){if(!(y instanceof d))throw new TypeError("Cannot call a class as a function")}function S(y,d){for(var t=0;t<d.length;t++){var n=d[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(y,n.key,n)}}function C(y,d,t){return d&&S(y.prototype,d),t&&S(y,t),y}function E(y,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function");y.prototype=Object.create(d&&d.prototype,{constructor:{value:y,writable:!0,configurable:!0}}),d&&I(y,d)}function I(y,d){return I=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n},I(y,d)}function L(y){var d=F();return function(){var n=M(y),a;if(d){var e=M(this).constructor;a=Reflect.construct(n,arguments,e)}else a=n.apply(this,arguments);return j(this,a)}}function j(y,d){return d&&(w(d)==="object"||typeof d=="function")?d:z(y)}function z(y){if(y===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return y}function F(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(y){return!1}}function M(y){return M=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},M(y)}function T(y,d,t){return d in y?Object.defineProperty(y,d,{value:t,enumerable:!0,configurable:!0,writable:!0}):y[d]=t,y}var g=k.Input.Search,l=3,p=2,c=1,s=[],o=function y(d,t,n){for(var a=t||"0",e=n||s,r=[],v=0;v<l;v++){var b="".concat(a,"-").concat(v);e.push({title:b,key:b}),v<p&&r.push(b)}if(d<0)return e;var O=d-1;r.forEach(function(h,D){return e[D].children=[],y(O,h,e[D].children)})};o(c);var u=[],m=function y(d){for(var t=0;t<d.length;t++){var n=d[t],a=n.key;u.push({key:a,title:a}),n.children&&y(n.children)}};m(s);var x=function y(d,t){for(var n,a=0;a<t.length;a++){var e=t[a];e.children&&(e.children.some(function(r){return r.key===d})?n=e.key:y(d,e.children)&&(n=y(d,e.children)))}return n},N=function(y){E(t,y);var d=L(t);function t(){var n;K(this,t);for(var a=arguments.length,e=new Array(a),r=0;r<a;r++)e[r]=arguments[r];return n=d.call.apply(d,[this].concat(e)),T(z(n),"state",{expandedKeys:[],searchValue:"",autoExpandParent:!0}),T(z(n),"onExpand",function(v){n.setState({expandedKeys:v,autoExpandParent:!1})}),T(z(n),"onChange",function(v){var b=v.target.value,O=u.map(function(h){return h.title.indexOf(b)>-1?x(h.key,s):null}).filter(function(h,D,A){return h&&A.indexOf(h)===D});n.setState({expandedKeys:O,searchValue:b,autoExpandParent:!0})}),n}return C(t,[{key:"render",value:function(){var a=this.state,e=a.searchValue,r=a.expandedKeys,v=a.autoExpandParent,b=function O(h){return h.map(function(D){var A=D.title.indexOf(e),W=D.title.substr(0,A),V=D.title.substr(A+e.length),_=A>-1?f.createElement("span",null,W,f.createElement("span",{className:"site-tree-search-value"},e),V):f.createElement("span",null,D.title);return D.children?{title:_,key:D.key,children:O(D.children)}:{title:_,key:D.key}})};return f.createElement("div",null,f.createElement(g,{style:{marginBottom:8},placeholder:"Search",onChange:this.onChange}),f.createElement(k.Tree,{onExpand:this.onExpand,expandedKeys:r,autoExpandParent:v,treeData:b(s)}))}}]),t}(f.Component);return f.createElement(N,null)},style:`.site-tree-search-value {
  color: #f50;
}
[data-theme="dark"] .site-tree-search-value {
  color: #d84a1b;
}
`,highlightedStyle:`<span class="token selector"><span class="token class">.site-tree-search-value</span> </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#f50</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>`}},3973:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807\u3002"]],"en-US":[["p","customize collapse/expand icon of tree node"]]},meta:{order:8,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6298\u53E0\u56FE\u6807","en-US":"Customize collapse/expand icon"},filename:"components/tree/demo/switcher-icon.md",id:"components-tree-demo-switcher-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  onSelect <span class="token operator">=</span> <span class="token punctuation">(</span>selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span>
        <span class="token attr-name">showLine</span>
        <span class="token attr-name">switcherIcon={&lt;DownOutlined</span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>
        defaultExpandedKeys<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        onSelect<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span>
        treeData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token punctuation">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
            key<span class="token punctuation">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                title<span class="token punctuation">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
                key<span class="token punctuation">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                title<span class="token punctuation">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
                key<span class="token punctuation">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                title<span class="token punctuation">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
                key<span class="token punctuation">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
                children<span class="token punctuation">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token punctuation">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token punctuation">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> DownOutlined <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@ant-design/icons'</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">onSelect</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">selectedKeys<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'selected'</span><span class="token punctuation">,</span> selectedKeys<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>Tree
        showLine
        switcherIcon<span class="token operator">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DownOutlined</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>
        defaultExpandedKeys<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">'0-0-0'</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
        onSelect<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onSelect<span class="token punctuation">}</span>
        treeData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">'parent 1'</span><span class="token punctuation">,</span>
            key<span class="token operator">:</span> <span class="token string">'0-0'</span><span class="token punctuation">,</span>
            children<span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'parent 1-0'</span><span class="token punctuation">,</span>
                key<span class="token operator">:</span> <span class="token string">'0-0-0'</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-0-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-0-1'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-0-2'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'parent 1-1'</span><span class="token punctuation">,</span>
                key<span class="token operator">:</span> <span class="token string">'0-0-1'</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-1-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">{</span>
                title<span class="token operator">:</span> <span class="token string">'parent 1-2'</span><span class="token punctuation">,</span>
                key<span class="token operator">:</span> <span class="token string">'0-0-2'</span><span class="token punctuation">,</span>
                children<span class="token operator">:</span> <span class="token punctuation">[</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-2-0'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                  <span class="token punctuation">{</span>
                    title<span class="token operator">:</span> <span class="token string">'leaf'</span><span class="token punctuation">,</span>
                    key<span class="token operator">:</span> <span class="token string">'0-0-2-1'</span><span class="token punctuation">,</span>
                  <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">}</span>
      <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Demo</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33);function w(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(s){return typeof s}:w=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},w(p)}var k=i(9),K=i(48);function S(p,c){if(!(p instanceof c))throw new TypeError("Cannot call a class as a function")}function C(p,c){for(var s=0;s<c.length;s++){var o=c[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(p,o.key,o)}}function E(p,c,s){return c&&C(p.prototype,c),s&&C(p,s),p}function I(p,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(c&&c.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),c&&L(p,c)}function L(p,c){return L=Object.setPrototypeOf||function(o,u){return o.__proto__=u,o},L(p,c)}function j(p){var c=M();return function(){var o=T(p),u;if(c){var m=T(this).constructor;u=Reflect.construct(o,arguments,m)}else u=o.apply(this,arguments);return z(this,u)}}function z(p,c){return c&&(w(c)==="object"||typeof c=="function")?c:F(p)}function F(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function M(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(p){return!1}}function T(p){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(s){return s.__proto__||Object.getPrototypeOf(s)},T(p)}function g(p,c,s){return c in p?Object.defineProperty(p,c,{value:s,enumerable:!0,configurable:!0,writable:!0}):p[c]=s,p}var l=function(p){I(s,p);var c=j(s);function s(){var o;S(this,s);for(var u=arguments.length,m=new Array(u),x=0;x<u;x++)m[x]=arguments[x];return o=c.call.apply(c,[this].concat(m)),g(F(o),"onSelect",function(N,y){console.log("selected",N,y)}),o}return E(s,[{key:"render",value:function(){return f.createElement(k.Tree,{showLine:!0,switcherIcon:f.createElement(K.DownOutlined,null),defaultExpandedKeys:["0-0-0"],onSelect:this.onSelect,treeData:[{title:"parent 1",key:"0-0",children:[{title:"parent 1-0",key:"0-0-0",children:[{title:"leaf",key:"0-0-0-0"},{title:"leaf",key:"0-0-0-1"},{title:"leaf",key:"0-0-0-2"}]},{title:"parent 1-1",key:"0-0-1",children:[{title:"leaf",key:"0-0-1-0"}]},{title:"parent 1-2",key:"0-0-2",children:[{title:"leaf",key:"0-0-2-0"},{title:"leaf",key:"0-0-2-1"}]}]}]})}}]),s}(f.Component);return f.createElement(l,null)}}},3974:function(P,B,i){P.exports={content:{"zh-CN":[["p","\u4F7F\u7528 ",["code","height"]," \u5C5E\u6027\u5219\u5207\u6362\u4E3A\u865A\u62DF\u6EDA\u52A8\u3002"]],"en-US":[["p","Use virtual list through ",["code","height"]," prop."]]},meta:{order:9,title:{"zh-CN":"\u865A\u62DF\u6EDA\u52A8","en-US":"Virtual scroll"},filename:"components/tree/demo/virtual-scroll.md",id:"components-tree-demo-virtual-scroll"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dig</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+</span><span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token punctuation">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tree</span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`}],highlightedCodes:{jsx:`<span class="token keyword">import</span> <span class="token punctuation">{</span> Tree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'antd'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">dig</span><span class="token punctuation">(</span>path <span class="token operator">=</span> <span class="token string">'0'</span><span class="token punctuation">,</span> level <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> treeNode <span class="token operator">=</span> <span class="token punctuation">{</span>
      title<span class="token operator">:</span> key<span class="token punctuation">,</span>
      key<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      treeNode<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> level <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>treeNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token function">dig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Tree</span></span> <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token number">233</span><span class="token punctuation">}</span></span> <span class="token attr-name">defaultExpandAll</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>`},preview:function(){var f=i(0),G=i(33),w=i(9);function k(){for(var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"0",C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:3,E=[],I=0;I<10;I+=1){var L="".concat(S,"-").concat(I),j={title:L,key:L};C>0&&(j.children=k(L,C-1)),E.push(j)}return E}var K=k();return f.createElement(w.Tree,{treeData:K,height:233,defaultExpandAll:!0})}}}}]);
