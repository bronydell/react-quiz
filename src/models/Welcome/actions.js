import AbstractAction from 'src/lib/AbstractAction'

class Action extends AbstractAction {
  _namespace = 'Welcome'
}

export const updateColor = new Action('updateColor')
