/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
export const TARGETS = {
  AppPage: { name: 'AppPage', value: 'lightning__AppPage' },
  HomePage: { name: 'HomePage', value: 'lightning__HomePage' },
  RecordPage: { name: 'RecordPage', value: 'lightning__RecordPage' },
  RecordAction: { name: 'RecordAction', value: 'lightning__RecordAction' },
  UtilityBar: { name: 'UtilityBar', value: 'lightning__UtilityBar' },
  FlowScreen: { name: 'FlowScreen', value: 'lightning__FlowScreen' },
  Tab: { name: 'Tab', value: 'lightning__Tab' },
  Inbox: { name: 'Inbox', value: 'lightning__Inbox' },
  CommunityPage: { name: 'CommunityPage', value: 'lightningCommunity__Page' },
  CommunityDefault: {
    name: 'CommunityDefault',
    value: 'lightningCommunity__Default'
  },
  CommunityPageLayout: {
    name: 'CommunityPageLayout',
    value: 'lightningCommunity__Page_Layout'
  },
  CommunityThemeLayout: {
    name: 'CommunityThemeLayout',
    value: 'lightningCommunity__Theme_Layout'
  },
  SnapinChatMessage: {
    name: 'SnapinChatMessage',
    value: 'lightningSnapin__ChatMessage'
  },
  SnapinMinimized: {
    name: 'SnapinMinimized',
    value: 'lightningSnapin__Minimized'
  },
  SnapinPreChat: { name: 'SnapinPreChat', value: 'lightningSnapin__PreChat' },
  SnapinChatHeader: {
    name: 'SnapinChatHeader',
    value: 'lightningSnapin__ChatHeader'
  }
};

export const DEFAULT_TARGET_VALUES = {
  name: null,
  value: null,
  enabled: false,
  small: false,
  large: false,
  headlessAction: false,
  properties: [],
  sobjects: []
};

export const OBJ_TARGETS = () => {
  const targets = {};
  Object.values(TARGETS).forEach((t) => {
    targets[t.value] = {
      ...DEFAULT_TARGET_VALUES,
      name: t.name,
      value: t.value
    };
  });
  return targets;
};

export const NON_PROPERTY_TARGETS = [
  TARGETS.Tab,
  TARGETS.CommunityPage,
  TARGETS.SnapinMinimized,
  TARGETS.SnapinPreChat,
  TARGETS.SnapinChatHeader,
  TARGETS.SnapinChatMessage
];
