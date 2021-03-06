/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import Relay from 'react-relay';

export default class extends Relay.Route {
  static queries = {
    factions: () => Relay.QL`query { factions(names: $factionNames) }`,
  };
  static routeName = 'StarWarsAppHomeRoute';
}
