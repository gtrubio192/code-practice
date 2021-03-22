# we track the current node, and the previous node to reverse
def recurisive_reverse(self, current, previous):
  # case 1: we are at head node (jk, check if head node is empty...)
  if previous == None:
    self.tail = current
    return
  # case 2: at end of list
  elif current.next == None:
    # self.tail = self.head
    current.next = previous
    self.head = current
    return
  # case 3: recursive call to find end of list
  # flip current pointer to previous
  elif current.next is not None:
    current.next = previous

    self.recursive_reverse(current.next, current)


    # ************************************************
    # ************************************************
    # Solution:

  def reverse_list_recur(self, current, previous):
    '''reverse the sequence of node pointers in the linked list'''
    # Given [1->2->3->4->5] reverse pointers [1<-2<-3<-4<-5]
    # Turning list to [5->4->3->2->1]
    if self.head == None:
        return
    # When we reach last node
    elif current.next == None:
        # Reverse head and tail pointers - tail is now the head
        self.tail = self.head
        current.next = previous
        self.head = current
    else:
        next = current.next
        current.next = previous
        self.reverse_list_recur(next, current)